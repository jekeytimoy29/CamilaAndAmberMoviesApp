import { useState } from "react";
import CustomFormCard from "../../components/customFormCard/CustomFormCard";
import { useLoaderData, redirect, useSubmit } from "react-router-dom";
import {
  getMovie,
  updateMovie,
  addMovie,
} from "../../datasource/local/moviesStorage";
import { updateMovieApi, addMovieApi } from "../../datasource/api/movies-api";
import { movieFormInputs } from "./MovieFormInputs";

export default function MovieForm() {
  const { movie } = useLoaderData();
  const [movieForm, setMovieForm] = useState(movie);
  const submit = useSubmit();
  const [validated, setValidated] = useState(false);

  const onSubmitForm = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      submit(e.target, { method: "post" });
    }

    setValidated(true);
  };

  return (
    <CustomFormCard
      title={movie._id && movie._id.length ? "Edit Movie" : "Add Movie"}
      data={movieForm}
      setData={setMovieForm}
      inputs={movieFormInputs}
      onSubmitForm={onSubmitForm}
      validated={validated}
    />
  );
}

export async function loader({ params }) {
  let movie = {
    title: "",
    plot: "",
    genres: "",
    runtime: 0,
    cast: "",
    poster: "",
    fullplot: "",
    languages: "",
    released: "",
    directors: "",
    rated: "",
    year: 0,
    imdb: 0,
    tomatoes: 0,
    countries: "",
  };

  if (params && params.movie_id) {
    movie = await getMovie(params.movie_id);
    if (!movie) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }

    // Need to convert as of now to string with comma separated as the input values
    movie.genres = movie.genres.length
      ? movie.genres.reduce((a, b) => a + ", " + b)
      : "";
    movie.cast = movie.cast.length
      ? movie.cast.reduce((a, b) => a + ", " + b)
      : "";
    movie.directors = movie.directors.length
      ? movie.directors.reduce((a, b) => a + ", " + b)
      : "";
    movie.languages = movie.languages.length
      ? movie.languages.reduce((a, b) => a + ", " + b)
      : "";
    movie.countries = movie.countries.length
      ? movie.countries.reduce((a, b) => a + ", " + b)
      : "";

    //format the date
    movie.released = movie.released.length && getFormattedDate(movie.released);
  }

  return { movie };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  let movie = Object.fromEntries(formData);

  // Need to convert from string input values to array before saving it to localstorage and server.
  movie.cast =
    movie.cast && movie.cast.length > 0 ? movie.cast.split(", ") : [];
  movie.genres =
    movie.genres && movie.genres.length > 0 ? movie.genres.split(", ") : [];
  movie.directors =
    movie.directors && movie.directors.length > 0
      ? movie.directors.split(", ")
      : [];
  movie.languages =
    movie.languages && movie.languages.length > 0
      ? movie.languages.split(", ")
      : [];
  movie.countries =
    movie.countries && movie.countries.length > 0
      ? movie.countries.split(", ")
      : [];

  if (params && params.movie_id) {
    movie._id = params.movie_id;
    movie = await updateMovieApi(movie);

    if (movie) await updateMovie(params.movie_id, movie);
  } else {
    movie = await addMovieApi(movie);

    if (movie) await addMovie(movie);
  }

  return redirect(`/movies/${movie._id}`);
}

const getFormattedDate = (dateString) => {
  const date = new Date(dateString);
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
};

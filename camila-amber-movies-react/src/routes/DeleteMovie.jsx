import { redirect } from "react-router-dom";
import { deleteMovie } from "../datasource/local/moviesStorage";
import { deleteMovieApi } from "../datasource/api/movies-api";

export async function action({ params }) {
  if (await deleteMovieApi(params.movie_id)) {
    await deleteMovie(params.movie_id);
  }

  return redirect("/movies");
}

import "./Movies.css";
import MovieCard from "../../components/movieCard/MovieCard";
import { useLoaderData, Form } from "react-router-dom";
import { getMovie } from "../../datasource/local/moviesStorage";
import { Button } from "react-bootstrap";

export default function MovieDetails() {
  const { movie } = useLoaderData();

  return (
    <>
      <MovieCard movie={movie} showMoreDetails />
      <div className="action-buttons">
        <Form action="edit">
          <Button variant="warning" type="submit" className="me-2">
            Edit
          </Button>
        </Form>
        <Form
          method="post"
          action="delete"
          onSubmit={(event) => {
            if (!confirm("Please confirm you want to delete this record.")) {
              event.preventDefault();
            }
          }}
        >
          <Button variant="danger" type="submit">
            Delete
          </Button>
        </Form>
      </div>
    </>
  );
}

export async function loader({ params }) {
  const movie = await getMovie(params.movie_id);
  if (!movie) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }

  return { movie };
}

import "./MovieMoreDetails.css";
import { useLoaderData } from "react-router-dom";
import MovieCard from "../../components/movieCard/MovieCard";
import { getMovie } from "../../datasource/local/moviesStorage";
import { Row } from "react-bootstrap";
import { getMovieComments } from "../../datasource/local/commentsStorage";
import CommentCard from "../../components/commentCard/CommentCard";

export default function MovieMoreDetails() {
  const { movie } = useLoaderData();
  const { comments } = useLoaderData();

  return (
    <Row>
      <div className="details-container">
        <MovieCard movie={movie} showMoreDetails />
      </div>
      <div className="comments-container">
        <CommentCard comments={comments} className="card-container" />
      </div>
    </Row>
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

  const comments = await getMovieComments(params.movie_id);
  return { movie, comments };
}

export async function action({ request, params }) {
  console.log(params.movie_id);
  const formData = await request.formData();
  let comment = Object.fromEntries(formData);
  console.log(comment);
  return null;
}

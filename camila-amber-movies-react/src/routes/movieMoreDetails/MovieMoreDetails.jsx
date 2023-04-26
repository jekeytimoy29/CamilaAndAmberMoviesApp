import "./MovieMoreDetails.css";
import { useLoaderData } from "react-router-dom";
import MovieCard from "../../components/movieCard/MovieCard";
import { getMovie } from "../../datasource/local/moviesStorage";
import { Row } from "react-bootstrap";
import {
  addComment,
  getMovieComments,
} from "../../datasource/local/commentsStorage";
import CommentCard from "../../components/commentCard/CommentCard";
import { useAuth } from "../../contexts/AuthContext";
import { addCommentApi } from "../../datasource/api/movies-api";

let auth = null;

export default function MovieMoreDetails() {
  const { movie } = useLoaderData();
  const { comments } = useLoaderData();
  auth = useAuth();

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
  const formData = await request.formData();
  let comment = Object.fromEntries(formData);

  comment.name = auth.user.name;
  comment.email = auth.user.email;
  comment.movie_id = params.movie_id;
  comment.date = getFormattedDate();

  console.log(comment);

  comment = await addCommentApi(params.movie_id, comment);

  if (comment) await addComment(comment);

  return null;
}

const getFormattedDate = () => {
  const date = new Date();
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
};

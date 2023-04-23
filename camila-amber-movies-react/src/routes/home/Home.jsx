import { useLoaderData } from "react-router-dom";
import { getMovies } from "../../datasource/local/moviesStorage";
import { Row } from "react-bootstrap";
import MovieCard from "../../components/movieCard/MovieCard";

export default function Home() {
  const { movies } = useLoaderData();

  return (
    <Row>
      {movies.length &&
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)}
    </Row>
  );
}

export async function loader() {
  const movies = await getMovies();
  return { movies };
}

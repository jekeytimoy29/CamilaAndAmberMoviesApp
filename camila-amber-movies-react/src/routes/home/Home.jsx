import "./Home.css";
import { useLoaderData } from "react-router-dom";
import { getMovies } from "../../datasource/local/moviesStorage";
import MovieCarousel from "../../components/movieCarousel/MovieCarousel";
import { Navbar, Container, Form } from "react-bootstrap";
import SearchBar from "../../components/searchBar/SearchBar";

export default function Home() {
  const { movies, q } = useLoaderData();

  return (
    <>
      <Navbar bg="light">
        <Container fluid>
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <SearchBar
                className="search-style"
                placeHolder="Search Movies..."
                q={q}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {movies.length ? (
        <MovieCarousel movies={movies} />
      ) : (
        <h1>No Records...</h1>
      )}
    </>
  );
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const movies = await getMovies(q);
  return { movies, q };
}

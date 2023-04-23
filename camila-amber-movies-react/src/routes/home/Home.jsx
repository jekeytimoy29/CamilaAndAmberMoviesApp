import "./Home.css";
import { useLoaderData } from "react-router-dom";
import { getMovies } from "../../datasource/local/moviesStorage";
import MovieCarousel from "../../components/movieCarousel/MovieCarousel";
import { Navbar, Container, Form } from "react-bootstrap";
import { useState } from "react";
import SearchBar from "../../components/searchBar/searchBar";

export default function Home() {
  const { movies } = useLoaderData();
  const [filterMovie, setFilterMovie] = useState("");

  return (
    <>
      <Navbar bg="light">
        <Container fluid>
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <SearchBar
                className="search-style"
                placeHolder="Search Movies..."
                filterText={filterMovie}
                setFilterText={setFilterMovie}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MovieCarousel movies={movies} filterMovie={filterMovie} />
    </>
  );
}

export async function loader() {
  const movies = await getMovies();
  return { movies };
}

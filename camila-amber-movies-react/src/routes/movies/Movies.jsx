import "./Movies.css";
import { Row, Col, Container } from "react-bootstrap";
import { Outlet, useLoaderData } from "react-router-dom";
import CustomListCard from "../../components/customListCard/CustomListCard";
import { getMovies } from "../../datasource/local/moviesStorage";

export default function Movies() {
  const { movies, q } = useLoaderData();

  return (
    <Container className="container">
      <Row>
        <Col md={5}>
          <CustomListCard
            title="Movies List"
            list={movies}
            q={q}
            navigateTo="movies"
            listItemProp="title"
          />
        </Col>
        <Col md={7}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const movies = await getMovies(q);
  return { movies, q };
}

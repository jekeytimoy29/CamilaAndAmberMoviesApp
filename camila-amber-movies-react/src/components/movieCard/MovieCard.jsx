import { Component } from "react";
import "./MovieCard.css";
import { Button, Card, ListGroup } from "react-bootstrap";

class MovieCard extends Component {
  render() {
    const { movie, showMoreDetails } = this.props;
    return (
      <Card className="card-style" sm={4} border="info">
        <Card.Img variant="top" src={movie.poster} className="card-img" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.plot}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <strong>Genres:</strong>{" "}
            {movie.genres.length && movie.genres.reduce((a, b) => a + ", " + b)}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Runtime:</strong> {movie.runtime} mins
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Starring:</strong>{" "}
            {movie.cast.length && movie.cast.reduce((a, b) => a + ", " + b)}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Directed By:</strong>{" "}
            {movie.directors.length &&
              movie.directors.reduce((a, b) => a + ", " + b)}
          </ListGroup.Item>
          {showMoreDetails && (
            <>
              <ListGroup.Item>
                <strong>Full Plot:</strong> {movie.fullplot}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Rated:</strong> {movie.rated}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>IMDB:</strong> {movie.imdb.toFixed(2)} / 10
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Rotten Tomatoes:</strong> {movie.tomatoes}%
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Released:</strong> {movie.released}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Countries:</strong>{" "}
                {movie.countries.length &&
                  movie.countries.reduce((a, b) => a + ", " + b)}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Languages:</strong>{" "}
                {movie.languages.length &&
                  movie.languages.reduce((a, b) => a + ", " + b)}
              </ListGroup.Item>
            </>
          )}
        </ListGroup>
        <Card.Footer>
          <p></p>
        </Card.Footer>
      </Card>
    );
  }
}

export default MovieCard;

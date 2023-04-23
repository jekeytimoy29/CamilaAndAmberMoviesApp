import "./MovieCard.css";
import { Button, Card, ListGroup } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Card className="card-style" sm={4}>
      <Card.Img variant="top" src={movie.poster} className="card-img" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.plot}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Footer>
        <Button>More Details</Button>
      </Card.Footer>
    </Card>
  );
};

export default MovieCard;

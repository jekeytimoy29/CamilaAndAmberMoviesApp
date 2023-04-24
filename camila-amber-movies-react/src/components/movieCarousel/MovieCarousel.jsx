import { useNavigate } from "react-router-dom";
import MovieCard from "../movieCard/MovieCard";
import "./MovieCarousel.css";
import { Carousel, Button } from "react-bootstrap";

const MovieCarousel = ({ movies }) => {
  const navigate = useNavigate();
  return (
    <div className="carousel-container">
      <Carousel variant="dark">
        {movies.length &&
          movies.map((movie, index) => (
            <Carousel.Item key={index} className="item-container">
              <MovieCard key={index} movie={movie} />
              <div className="d-grid gap-2">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => navigate(`/movie-more-details/${movie._id}`)}
                >
                  More Details
                </Button>
              </div>
              <br />
              <br />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default MovieCarousel;

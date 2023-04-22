import express from "express";
import MoviesController from "../controllers/movies.controller.js";

const router = express.Router();

router
  .route("/")
  .get(MoviesController.getMovies)
  .post(MoviesController.addMovie)
  .put(MoviesController.updateMovie);
router
  .route("/:id")
  .get(MoviesController.getMovieById)
  .delete(MoviesController.deleteMovie);
router
  .route("/:id/comments")
  .get(MoviesController.getComments)
  .post(MoviesController.addComment);

export default router;

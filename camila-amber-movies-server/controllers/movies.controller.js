import Movie from "../models/movie.model.js";
import Comment from "../models/comment.model.js";

export default class MoviesController {
  static getMovies(req, res, next) {
    Movie.find()
      .then((movies) => res.json(movies))
      .catch(() => next());
  }

  static getMovieById(req, res, next) {
    const id = req.params.id || {};
    Movie.findById(id)
      .then((movie) => res.json(movie))
      .catch(() => next());
  }

  static addMovie(req, res, next) {
    const movie = new Movie(req.body);

    movie
      .save()
      .then(() => res.json(movie))
      .catch(() => next());
  }

  static updateMovie(req, res, next) {
    const {
      _id,
      plot,
      genres,
      runtime,
      cast,
      poster,
      title,
      fullplot,
      languages,
      released,
      directors,
      rated,
      year,
      imdb,
      countries,
      tomatoes,
    } = req.body;

    Movie.findById(_id)
      .then((movie) => {
        movie.plot = plot;
        movie.genres = genres;
        movie.runtime = runtime;
        movie.cast = cast;
        movie.poster = poster;
        movie.title = title;
        movie.fullplot = fullplot;
        movie.languages = languages;
        movie.released = released;
        movie.directors = directors;
        movie.rated = rated;
        movie.year = year;
        movie.imdb = imdb;
        movie.countries = countries;
        movie.tomatoes = tomatoes;

        movie
          .save()
          .then(() => res.json(movie))
          .catch(() => next());
      })
      .catch(() => next());
  }

  static deleteMovie(req, res, next) {
    const id = req.params.id || {};
    Movie.findByIdAndDelete(id)
      .then(() => res.json({ status: "success" }))
      .catch(() => next());
  }

  static getComments(req, res, next) {
    const id = req.params.id || {};
    Comment.find({ movie_id: id })
      .then((movies) => res.json(movies))
      .catch(() => next());
  }

  static addComment(req, res, next) {
    const comment = new Comment(req.body);

    comment
      .save()
      .then(() => res.json(comment))
      .catch(() => next());
  }
}

{
}

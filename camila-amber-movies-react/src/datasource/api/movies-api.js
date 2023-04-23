import {
  getElements,
  getElement,
  addElement,
  updateElement,
  deleteElement,
} from "./http-api";

export const getMoviesApi = () => {
  return getElements("/movies");
};

export const getMovieApi = (_id) => {
  return getElement(`/movies/${_id}`);
};

export const deleteMovieApi = (_id) => {
  return deleteElement(`/movies/${_id}`);
};

export const addMovieApi = (movie) => {
  return addElement("/movies", movie);
};

export const updateMovieApi = (movie) => {
  return updateElement("/movies", movie);
};

export const getCommentsApi = (movie_id) => {
  return getElements(`/movies/${movie_id}/comments`);
};

export const addCommentApi = (movie_id, comment) => {
  return addElement(`/movies/${movie_id}/comments`, comment);
};

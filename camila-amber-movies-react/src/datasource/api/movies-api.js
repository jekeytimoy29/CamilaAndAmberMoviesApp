import {
  getElements,
  getElement,
  addElement,
  updateElement,
  deleteElement,
} from "./http-api";

export const getMoviesApi = async () => {
  return await getElements("/movies");
};

export const getMovieApi = async (_id) => {
  return await getElement(`/movies/${_id}`);
};

export const deleteMovieApi = async (_id) => {
  return await deleteElement(`/movies/${_id}`);
};

export const addMovieApi = (movie) => {
  return addElement("/movies", movie);
};

export const updateMovieApi = async (movie) => {
  return await updateElement("/movies", movie);
};

export const getCommentsApi = async (movie_id) => {
  return await getElements(`/movies/${movie_id}/comments`);
};

export const addCommentApi = async (movie_id, comment) => {
  return await addElement(`/movies/${movie_id}/comments`, comment);
};

import { get, set, add, getElement, remove } from "./localStorage";

export async function setMovies(movies) {
  return await set("movies", movies);
}

export async function getMovies() {
  return await get("movies");
}

export async function getMovie(id) {
  return await getElement("movies", id);
}

export async function deleteMovie(id) {
  return await remove("movies", id);
}

export async function addMovie(movie) {
  return await add("movies", movie);
}

export async function updateMovie(id, updates) {
  return await add("movies", id, updates);
}

import { get, set, add, getElement, remove, update } from "./localStorage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function setMovies(movies) {
  return await set("movies", movies);
}

export async function getMovies(query) {
  let movies = await get("movies");
  if (query) {
    movies = matchSorter(movies, query, { keys: ["title", "genres"] });
  }
  return movies.sort(sortBy("title", "createdAt"));
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
  return await update("movies", id, updates);
}

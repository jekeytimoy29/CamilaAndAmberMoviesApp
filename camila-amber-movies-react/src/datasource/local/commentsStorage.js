import { set, add } from "./localStorage";
import localforage from "localforage";

export async function setComments(comments) {
  return await set("comments", comments);
}

export async function addComment(comment) {
  return await add("comments", comment);
}

export async function getMovieComments(movie_id) {
  let comments = await localforage.getItem("comments");
  if (!comments) {
    comments = [];
    await set(comments);

    return comments;
  }

  return comments.filter((comment) => comment.movie_id === movie_id);
}

import { getElements } from "./http-api";

export const getAllCommentsApi = () => {
  return getElements("/comments");
};

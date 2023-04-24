import { getElements } from "./http-api";

export const getAllCommentsApi = async () => {
  return await getElements("/comments");
};

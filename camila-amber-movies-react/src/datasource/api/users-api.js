import {
  getElements,
  getElement,
  addElement,
  updateElement,
  deleteElement,
} from "./http-api";

export const getUsersApi = async () => {
  return await getElements("/users");
};

export const getUserApi = async (_id) => {
  return await getElement(`/users/${_id}`);
};

export const deleteUserApi = async (_id) => {
  return await deleteElement(`/users/${_id}`);
};

export const addUserApi = async (user) => {
  return await addElement("/users", user);
};

export const updateUserApi = async (user) => {
  return await updateElement("/users", user);
};

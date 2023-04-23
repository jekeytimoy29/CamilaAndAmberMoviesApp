import {
  getElements,
  getElement,
  addElement,
  updateElement,
  deleteElement,
} from "./http-api";

export const getUsersApi = () => {
  return getElements("/users");
};

export const getUserApi = (_id) => {
  return getElement(`/users/${_id}`);
};

export const deleteUserApi = (_id) => {
  return deleteElement(`/users/${_id}`);
};

export const addUserApi = (user) => {
  return addElement("/users", user);
};

export const updateUserApi = (user) => {
  return updateElement("/users", user);
};

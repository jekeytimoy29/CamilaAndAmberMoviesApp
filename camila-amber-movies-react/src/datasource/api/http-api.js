import api from "./axios-config";

export const getElements = async (url) => {
  try {
    const response = await api.get(url);
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
  }

  return [];
};

export const addElement = async (url, element) => {
  try {
    const response = await api.post(url, element);
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
  }

  return null;
};

export const updateElement = async (url, element) => {
  try {
    const response = await api.put(url, element);
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
  }

  return null;
};

export const deleteElement = async (url) => {
  try {
    await api.delete(url);
  } catch (err) {
    console.log(err);
    return false;
  }

  return true;
};

export const getElement = async (url) => {
  try {
    const response = await api.get(url);
    if (response.status === 200) return response.data;
  } catch (err) {
    console.log(err);
  }

  return null;
};

import localforage from "localforage";

export async function set(elementString, elements) {
  return await localforage.setItem(elementString, elements);
}

export async function get(elementString) {
  let elements = await localforage.getItem(elementString);
  if (!elements) {
    elements = [];
    await set(elementString, elements);
  }

  return elements;
}

export async function add(elementString, element) {
  let elements = await get(elementString);
  elements.unshift(element);
  await set(elementString, elements);
  return element;
}

export async function getElement(elementString, id) {
  let elements = await localforage.getItem(elementString);
  let element = elements.find((element) => element._id === id);
  return element ?? null;
}

export async function update(elementString, id, updates) {
  let elements = await localforage.getItem(elementString);
  let element = elements.find((element) => element._id === id);
  if (!element) throw new Error("No element found for", id);
  Object.assign(element, updates);
  await set(elementString, elements);
  return element;
}

export async function remove(elementString, id) {
  let elements = await localforage.getItem(elementString);
  let index = elements.findIndex((element) => element._id === id);
  if (index > -1) {
    elements.splice(index, 1);
    await set(elementString, elements);
    return true;
  }
  return false;
}

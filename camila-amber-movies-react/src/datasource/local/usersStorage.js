import { get, set, add, getElement, remove } from "./localStorage";

export async function setUsers(users) {
  return await set("users", users);
}

export async function getUsers() {
  return await get("users");
}

export async function getUser(id) {
  return await getElement("users", id);
}

export async function deleteUser(id) {
  return await remove("users", id);
}

export async function addUser(user) {
  return await add("users", user);
}

export function updateUser(id, updates) {
  return add("users", id, updates);
}

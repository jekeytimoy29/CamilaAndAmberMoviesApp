import { get, set, add, getElement, remove, update } from "./localStorage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function setUsers(users) {
  return await set("users", users);
}

export async function getUsers(query) {
  let users = await get("users");
  if (query) {
    users = matchSorter(users, query, { keys: ["name", "email"] });
  }
  return users.sort(sortBy("name", "createdAt"));
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

export async function updateUser(id, updates) {
  return await update("users", id, updates);
}

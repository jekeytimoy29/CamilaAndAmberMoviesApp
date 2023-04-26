import { redirect } from "react-router-dom";
import { deleteUser } from "../datasource/local/usersStorage";
import { deleteUserApi } from "../datasource/api/users-api";

export async function action({ params }) {
  if (await deleteUserApi(params.user_id)) {
    await deleteUser(params.user_id);
  }

  return redirect("/");
}

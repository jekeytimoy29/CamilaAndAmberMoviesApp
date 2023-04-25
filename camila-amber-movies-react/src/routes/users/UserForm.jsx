import { useState } from "react";
import CustomFormCard from "../../components/customFormCard/CustomFormCard";
import { useLoaderData, redirect } from "react-router-dom";
import { userFormInputs } from "./UserFormInputs";
import {
  getUser,
  updateUser,
  addUser,
} from "../../datasource/local/usersStorage";
import { updateUserApi, addUserApi } from "../../datasource/api/users-api";

export default function UserForm() {
  const { user } = useLoaderData();
  const [userForm, setUserForm] = useState(user);

  const selectionItems = ["User", "Admin"];

  return (
    <CustomFormCard
      title={user._id && user._id.length ? "Edit User" : "Add User"}
      data={userForm}
      setData={setUserForm}
      inputs={userFormInputs}
      selectionItems={selectionItems}
    />
  );
}

export async function loader({ params }) {
  let user = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  };

  if (params && params.user_id) {
    user = await getUser(params.user_id);
    if (!user) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
  }

  return { user };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  let user = Object.fromEntries(formData);

  if (params && params.user_id) {
    user._id = params.user_id;
    user = await updateUserApi(user);

    if (user) await updateUser(params.user_id, user);
  } else {
    user = await addUserApi(user);

    if (user) await addUser(user);
  }

  return redirect(`/users/${user._id}`);
}

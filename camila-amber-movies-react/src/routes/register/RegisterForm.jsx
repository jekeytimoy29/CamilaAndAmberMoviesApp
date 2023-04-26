import "./RegisterForm.css";
import { useLoaderData, redirect, useSubmit } from "react-router-dom";
import CustomFormCard from "../../components/customFormCard/CustomFormCard";
import { useState } from "react";
import { registerFormInputs } from "./registerFormInputs";
import {
  getUsers,
  getUser,
  addUser,
  updateUser,
} from "../../datasource/local/usersStorage";
import { updateUserApi, addUserApi } from "../../datasource/api/users-api";

export default function RegisterForm() {
  const { profileData } = useLoaderData();
  const [registerFormData, setRegisterFormData] = useState(profileData);
  const submit = useSubmit();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (registerFormData.password === registerFormData.confirmPassword) {
      const users = await getUsers();
      const user = users.find((u) => u.email === registerFormData.email);

      if (user && !registerFormData._id)
        setErrorMessage("Entered E-mail already registered...");
      else submit(e.target, { method: "post" });
    } else setErrorMessage("Password and Confirmed Password are not equal...");
  };

  return (
    <div className="form-container">
      <CustomFormCard
        title="Register"
        data={registerFormData}
        setData={setRegisterFormData}
        inputs={registerFormInputs}
        errorMessage={errorMessage}
        onSubmitForm={onSubmitForm}
      />
    </div>
  );
}

export async function loader({ params }) {
  let profileData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  if (params && params.user_id) {
    profileData = await getUser(params.user_id);
    if (!profileData) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }

    profileData.confirmPassword = profileData.password;
  }

  return { profileData };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  let user = Object.fromEntries(formData);

  // always set role to User for registered users as of now
  user.role = "User";

  if (params && params.user_id) {
    user._id = params.user_id;
    user = await updateUserApi(user);

    if (user) await updateUser(params.user_id, user);

    return redirect("/");
  } else {
    user = await addUserApi(user);

    if (user) await addUser(user);
  }

  return redirect("/login");
}

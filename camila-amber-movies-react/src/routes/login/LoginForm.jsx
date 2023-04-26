import { redirect, useSubmit } from "react-router-dom";
import CustomFormCard from "../../components/customFormCard/CustomFormCard";
import { loginFormInputs } from "./LoginFormInputs";
import { useState } from "react";
import { getUsers } from "../../datasource/local/usersStorage";
import { useAuthDispatch } from "../../contexts/AuthContext";

export default function LoginForm() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const submit = useSubmit();
  const [errorMessage, setErrorMessage] = useState("");
  const authDispatch = useAuthDispatch();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const user = await getConfirmedUser(loginData.username, loginData.password);
    if (user) {
      authDispatch({ type: "LOGIN", user: user });
      submit(e.target, { method: "post" });
    } else setErrorMessage("Invalid Username and Password...");
  };

  return (
    <div className="form-container">
      <CustomFormCard
        title="Login"
        data={loginData}
        setData={setLoginData}
        inputs={loginFormInputs}
        onSubmitForm={onSubmitForm}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export async function action() {
  return redirect("/");
}

async function getConfirmedUser(username, password) {
  const users = await getUsers();
  const user = users.find(
    (u) => u.email === username && u.password === password
  );
  return user;
}

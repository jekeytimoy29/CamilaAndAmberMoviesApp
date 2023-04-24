import { redirect } from "react-router-dom";
import CustomFormCard from "../../components/customFormCard/CustomFormCard";
import { loginFormInputs } from "./LoginFormInputs";
import { useState } from "react";

export default function LoginForm() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  return (
    <div className="form-container">
      <CustomFormCard
        title="Login"
        data={loginData}
        setData={setLoginData}
        inputs={loginFormInputs}
      />
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  let comment = Object.fromEntries(formData);
  console.log(comment);
  return redirect("/");
}

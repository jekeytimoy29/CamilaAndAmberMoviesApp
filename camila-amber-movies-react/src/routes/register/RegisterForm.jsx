import { useLoaderData, redirect } from "react-router-dom";
import CustomFormCard from "../../components/customFormCard/CustomFormCard";
import { useState } from "react";
import { registerFormInputs } from "./registerFormInputs";

export default function RegisterForm() {
  const { profileData } = useLoaderData();
  const [registerFormData, setRegisterFormData] = useState(profileData);

  return (
    <div>
      <CustomFormCard
        title="Register"
        data={registerFormData}
        setData={setRegisterFormData}
        inputs={registerFormInputs}
      />
    </div>
  );
}

export async function loader() {
  const profileData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return { profileData };
}

export async function action({ request }) {
  const formData = await request.formData();
  let comment = Object.fromEntries(formData);
  console.log(comment);
  return redirect("/");
}

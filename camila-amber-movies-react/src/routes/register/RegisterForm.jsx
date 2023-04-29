import "./RegisterForm.css";
import { redirect } from "react-router-dom";
import CustomFormCard from "../../components/customFormCard/CustomFormCard";
import { registerFormInputs } from "./RegisterFormInputs";
import {
  getUser,
  addUser,
  updateUser,
} from "../../datasource/local/usersStorage";
import { updateUserApi, addUserApi } from "../../datasource/api/users-api";
import { withSubmitForm } from "../../hocs/WithSubmitForm";

const RegisterForm = ({
  userForm,
  setUserForm,
  onSubmitForm,
  errorMessage,
  validated,
}) => {
  return (
    <div className="form-container">
      <CustomFormCard
        title="Register"
        data={userForm}
        setData={setUserForm}
        inputs={registerFormInputs}
        errorMessage={errorMessage}
        onSubmitForm={onSubmitForm}
        validated={validated}
      />
    </div>
  );
};

export default withSubmitForm(RegisterForm);

export async function loader({ params }) {
  let user = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  if (params && params.user_id) {
    user = await getUser(params.user_id);
    if (!user) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }

    user.confirmPassword = user.password;
  }

  return { user };
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

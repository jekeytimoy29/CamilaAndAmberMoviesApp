import { useState } from "react";
import { useSubmit, useLoaderData } from "react-router-dom";
import { getUsers } from "../datasource/local/usersStorage";

export const withSubmitForm = (Component) => {
  function EnhancedComponent() {
    const { user } = useLoaderData();
    const [userForm, setUserForm] = useState(user);
    const submit = useSubmit();
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmitForm = async (e) => {
      e.preventDefault();
      if (userForm.password === userForm.confirmPassword) {
        const users = await getUsers();
        const user = users.find((u) => u.email === userForm.email);

        if (user && !userForm._id)
          setErrorMessage("Entered E-mail already registered...");
        else submit(e.target, { method: "post" });
      } else
        setErrorMessage("Password and Confirmed Password are not equal...");
    };

    return (
      <Component
        userForm={userForm}
        setUserForm={setUserForm}
        errorMessage={errorMessage}
        onSubmitForm={onSubmitForm}
      />
    );
  }
  return EnhancedComponent;
};

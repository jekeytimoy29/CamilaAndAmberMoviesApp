import { useState } from "react";
import { useSubmit, useLoaderData } from "react-router-dom";
import { getUsers } from "../datasource/local/usersStorage";

export const withSubmitForm = (Component) => {
  function EnhancedComponent() {
    const { user } = useLoaderData();
    const [userForm, setUserForm] = useState(user);
    const submit = useSubmit();
    const [errorMessage, setErrorMessage] = useState("");
    const [validated, setValidated] = useState(false);

    const onSubmitForm = async (e) => {
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault();
        if (userForm.password === userForm.confirmPassword) {
          const users = await getUsers();
          const user = users.find((u) => u.email === userForm.email);

          if (user && !userForm._id)
            setErrorMessage("Entered E-mail already registered...");
          else submit(e.target, { method: "post" });
        } else
          setErrorMessage("Password and Confirmed Password are not equal...");
      }

      setValidated(true);
    };

    return (
      <Component
        userForm={userForm}
        setUserForm={setUserForm}
        errorMessage={errorMessage}
        onSubmitForm={onSubmitForm}
        validated={validated}
      />
    );
  }
  return EnhancedComponent;
};

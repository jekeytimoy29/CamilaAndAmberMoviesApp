import { useLoaderData } from "react-router-dom";
import "./MyProfile.css";
import { useAuthDispatch } from "../../contexts/AuthContext";
import { getUser } from "../../datasource/local/usersStorage";
import UserDetailsCard from "../../components/userDetailsCard/UserDetailsCard";
import { Form } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function MyProfile() {
  const { user } = useLoaderData();
  const authDispatch = useAuthDispatch();

  return (
    <div className="container">
      <UserDetailsCard user={user} />
      <div className="profile-buttons">
        <Form action="edit">
          <Button variant="warning" type="submit" className="me-2">
            Edit Account
          </Button>
        </Form>
        <Form
          method="post"
          action="delete"
          onSubmit={(event) => {
            if (!confirm("Please confirm you want to delete this record.")) {
              event.preventDefault();
            } else authDispatch({ type: "LOGOUT" });
          }}
        >
          <Button variant="danger" type="submit">
            Remove Account
          </Button>
        </Form>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const user = await getUser(params.user_id);
  if (!user) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }

  return { user };
}

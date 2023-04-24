import UserDetailsCard from "../../components/userDetailsCard/UserDetailsCard";
import { useLoaderData, Form } from "react-router-dom";
import { getUser } from "../../datasource/local/usersStorage";
import { Button } from "react-bootstrap";

export default function UserDetails() {
  const { user } = useLoaderData();

  return (
    <>
      <UserDetailsCard user={user} />
      <div className="action-buttons">
        <Form action="edit">
          <Button variant="warning" type="submit" className="me-2">
            Edit
          </Button>
        </Form>
        <Form
          method="post"
          action="delete"
          onSubmit={(event) => {
            if (!confirm("Please confirm you want to delete this record.")) {
              event.preventDefault();
            }
          }}
        >
          <Button variant="danger" type="submit">
            Delete
          </Button>
        </Form>
      </div>
    </>
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

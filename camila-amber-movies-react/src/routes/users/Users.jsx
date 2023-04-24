import "./Users.css";
import { Row, Col } from "react-bootstrap";
import { Outlet, useLoaderData } from "react-router-dom";
import CustomListCard from "../../components/customListCard/CustomListCard";
import { getUsers } from "../../datasource/local/usersStorage";

export default function Users() {
  const { users, q } = useLoaderData();

  return (
    <Row className="mb-2">
      <div className="list-container" as={Col} md="4">
        <CustomListCard
          title="Users List"
          list={users}
          q={q}
          navigateTo="users"
          listItemProp="name"
        />
      </div>
      <div className="outlet-container" as={Col} md="8">
        <Outlet />
      </div>
    </Row>
  );
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const users = await getUsers(q);
  return { users, q };
}

import "./Users.css";
import { Row, Col } from "react-bootstrap";
import { Outlet, useLoaderData } from "react-router-dom";
import CustomListCard from "../../components/customListCard/CustomListCard";
import { getUsers } from "../../datasource/local/usersStorage";

export default function Users() {
  const { users, q } = useLoaderData();

  return (
    <div className="users-container">
      <Row>
        <Col md={5}>
          <CustomListCard
            title="Users List"
            list={users}
            q={q}
            navigateTo="users"
            listItemProp="name"
          />
        </Col>
        <Col md={7}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const users = await getUsers(q);
  return { users, q };
}

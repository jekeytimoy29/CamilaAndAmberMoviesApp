import { Card, ListGroup } from "react-bootstrap";

const UserDetailsCard = (props) => {
  const { user } = props;

  return (
    <Card>
      <Card.Header as="h5">{user.name}</Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <strong>E-mail: </strong>
            {user.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Role: </strong>
            {user.role}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <p></p>
      </Card.Footer>
    </Card>
  );
};

export default UserDetailsCard;

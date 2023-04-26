import { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

class UserDetailsCard extends Component {
  render() {
    const { user } = this.props;

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
  }
}

export default UserDetailsCard;

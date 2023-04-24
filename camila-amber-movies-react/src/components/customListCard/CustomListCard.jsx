import React from "react";
import SearchBar from "../searchBar/SearchBar";
import { InputGroup, Card, Button, Nav, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const CustomListCard = (props) => {
  const { title, list, q, navigateTo, listItemProp } = props;
  const navigate = useNavigate();

  return (
    <Card>
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <Form>
          <InputGroup className="mb-3">
            <SearchBar q={q} placeHolder="Search..." />
            <Button
              variant="primary"
              onClick={() => navigate(`/${navigateTo}/add`)}
            >
              Add New
            </Button>
          </InputGroup>
        </Form>
        <Nav className="flex-column">
          {list.length ? (
            list.map((item, index) => (
              <NavLink
                key={index}
                to={`/${navigateTo}/${item._id}`}
                className="nav-link"
              >
                {item[listItemProp]}
              </NavLink>
            ))
          ) : (
            <p>
              <i>No Items...</i>
            </p>
          )}
        </Nav>
      </Card.Body>
      <Card.Footer>
        <p></p>
      </Card.Footer>
    </Card>
  );
};

export default CustomListCard;

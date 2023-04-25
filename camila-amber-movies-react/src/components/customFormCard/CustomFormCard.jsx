import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import CustomFormInput from "../customFormInput/CustomFormInput";
import { useNavigate, useSubmit } from "react-router-dom";
import CustomFormSelect from "../customFormSelect/CustomFormSelect";

const CustomFormCard = (props) => {
  const { data, setData, title, inputs, selectionItems } = props;
  const submit = useSubmit();
  const navigate = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    submit(e.target, { method: "post" });
  };

  return (
    <Card>
      <Card.Header as="h5">{title}</Card.Header>
      <Form onSubmit={onSubmitForm}>
        <Card.Body>
          {inputs
            .filter(
              (i) =>
                i.type === "text" ||
                i.as === "textarea" ||
                i.type === "number" ||
                i.type === "email" ||
                i.type === "password" ||
                i.type === "date"
            )
            .map((input, index) => (
              <CustomFormInput
                key={index}
                {...input}
                onChangeInput={onChangeInput}
                value={data[input.name]}
              />
            ))}
          {selectionItems &&
            selectionItems.length &&
            inputs
              .filter((i) => i.type === "select")
              .map((input, index) => (
                <CustomFormSelect
                  key={index}
                  {...input}
                  onChangeInput={onChangeInput}
                  value={data[input.name]}
                  selectionItems={selectionItems}
                />
              ))}
        </Card.Body>
        <Card.Footer>
          <Button
            variant="secondary"
            className="me-2"
            onClick={() => navigate(-1)}
          >
            Close
          </Button>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Card.Footer>
      </Form>
    </Card>
  );
};

export default CustomFormCard;

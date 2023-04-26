import { Component } from "react";
import { Form } from "react-bootstrap";

class CustomFormInput extends Component {
  render() {
    const { label, onChangeInput, ...properties } = this.props;
    return (
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...properties} onChange={onChangeInput} />
      </Form.Group>
    );
  }
}

export default CustomFormInput;

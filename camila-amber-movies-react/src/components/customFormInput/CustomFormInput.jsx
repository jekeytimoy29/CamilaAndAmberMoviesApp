import { Form } from "react-bootstrap";

const CustomFormInput = ({ label, onChangeInput, ...properties }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...properties} onChange={onChangeInput} />
    </Form.Group>
  );
};

export default CustomFormInput;

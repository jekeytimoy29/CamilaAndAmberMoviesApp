import { Component } from "react";
import { Form } from "react-bootstrap";

class CustomFormSelect extends Component {
  render() {
    const { label, onChangeInput, selectionItems, ...properties } = this.props;

    return (
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Select {...properties} onChange={onChangeInput}>
          <option disabled value="">
            Please select:
          </option>
          {selectionItems.map((s, index) => (
            <option key={index} value={s}>
              {s}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">*Required</Form.Control.Feedback>
      </Form.Group>
    );
  }
}

export default CustomFormSelect;

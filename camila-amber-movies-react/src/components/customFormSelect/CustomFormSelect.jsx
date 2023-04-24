import { Form } from "react-bootstrap";

const CustomFormSelect = (props) => {
  const { label, onChangeInput, selectionItems, ...properties } = props;

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
    </Form.Group>
  );
};

export default CustomFormSelect;

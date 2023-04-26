import { Form, Modal, Button } from "react-bootstrap";
import CustomFormInput from "../customFormInput/CustomFormInput";

const CustomFormModal = (props) => {
  const { data, setData, show, onHide, title, inputs, onSubmitForm } = props;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Form onSubmit={onSubmitForm}>
        <Modal.Body>
          {inputs.map((input, index) => (
            <CustomFormInput
              key={index}
              {...input}
              onChangeInput={onChangeInput}
              value={data[input.name]}
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default CustomFormModal;

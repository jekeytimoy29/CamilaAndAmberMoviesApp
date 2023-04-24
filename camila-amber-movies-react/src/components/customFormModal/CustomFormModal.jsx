import { Form, Modal, Button } from "react-bootstrap";
import { useSubmit } from "react-router-dom";
import CustomFormInput from "../customFormInput/CustomFormInput";

const CustomFormModal = (props) => {
  const { data, setData, show, onHide, title, inputs } = props;
  const submit = useSubmit();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    submit(e.target, { method: "post" });
    onHide();
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

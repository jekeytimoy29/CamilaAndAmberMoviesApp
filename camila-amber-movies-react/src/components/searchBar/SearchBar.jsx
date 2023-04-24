import { Form } from "react-bootstrap";
import { useSubmit } from "react-router-dom";

const SearchBar = (props) => {
  const { className, placeHolder, q } = props;
  const submit = useSubmit();
  return (
    <Form.Control
      type="search"
      placeholder={placeHolder}
      aria-label={placeHolder}
      className={className}
      name="q"
      id="q"
      defaultValue={q}
      onChange={(event) => {
        const isFirstSearch = q == null;
        submit(event.currentTarget.form, {
          replace: !isFirstSearch,
        });
      }}
    />
  );
};

export default SearchBar;

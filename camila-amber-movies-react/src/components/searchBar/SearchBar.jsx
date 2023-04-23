import { Form } from "react-bootstrap";

const SearchBar = ({ className, placeHolder, filterText, setFilterText }) => {
  return (
    <Form.Control
      value={filterText}
      type="search"
      placeholder={placeHolder}
      aria-label="Search"
      className={className}
      onChange={(e) => setFilterText(e.target.value)}
    />
  );
};

export default SearchBar;

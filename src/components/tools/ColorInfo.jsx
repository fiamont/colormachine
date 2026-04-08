import { Button } from "react-bootstrap";

function ColorInfo({ label, value, onCopy }) {
  return (
    <div className="d-flex flex-row justify-content-between align-items-center p-1">
      <p className="m-0 p-0">
        {label}: {value}
      </p>
      <Button variant="light" onClick={() => onCopy(value)}>
        Copy
      </Button>
    </div>
  );
}

export default ColorInfo;

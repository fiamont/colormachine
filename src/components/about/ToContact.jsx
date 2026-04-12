import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./AboutComponents.css";

function ToContact({ text }) {
  return (
    <Button
      as={Link}
      className="to-contact-container shadow p-4 w-100 rounded"
      variant="light"
      to="/contact"
    >
      <p className="text-center m-0 p-0">{text.contact.button}</p>
    </Button>
  );
}

export default ToContact;

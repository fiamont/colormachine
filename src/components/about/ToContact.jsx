import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./AboutComponents.css";

function ToContact({ text }) {
  return (
    <div className="d-flex flex-column to-contact-container shadow p-4 rounded align-self-start my-2 mx-0 m-sm-4 w-75">
      <p>{text.contact.before}</p>
      <Button
        as={Link}
        className="link"
        variant="outline-secondary"
        to="/contact"
      >
        {text.contact.linktext}
      </Button>
    </div>
  );
}

export default ToContact;

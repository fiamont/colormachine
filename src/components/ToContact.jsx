import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function ToContact({ text }) {
  return (
    <div className="d-flex flex-column align-items-center mb-5 py-4 rounded to-contact-container w-75">
      <p>{text.contact.before}</p>
      <Button as={Link} className="link" variant="light" to="/contact">
        {text.contact.linktext}
      </Button>
    </div>
  );
}

export default ToContact;

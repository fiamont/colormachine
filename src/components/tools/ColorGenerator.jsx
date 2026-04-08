import { Modal, Button } from "react-bootstrap";

function ColorGenerator({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Color Generator</Modal.Title>
      </Modal.Header>
      <Modal.Body>Generate color here</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ColorGenerator;

import { Modal, Button } from "react-bootstrap";

function InspirationGenerator({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Inspirational Word Generator</Modal.Title>
      </Modal.Header>
      <Modal.Body>Generate inspirational words here</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InspirationGenerator;

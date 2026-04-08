import { Modal, Button } from "react-bootstrap";

function FontGenerator({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Font Generator</Modal.Title>
      </Modal.Header>
      <Modal.Body>Generate font here</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FontGenerator;

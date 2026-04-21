import { Modal, Button } from "react-bootstrap";

function ColorBlindnessSimulator({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Color Blindness Simulator</Modal.Title>
      </Modal.Header>
      <Modal.Body>Work in progress</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ColorBlindnessSimulator;

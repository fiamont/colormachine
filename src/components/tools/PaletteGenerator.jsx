import { Modal, Button } from "react-bootstrap";

function PaletteGenerator({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Palette Generator</Modal.Title>
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

export default PaletteGenerator;

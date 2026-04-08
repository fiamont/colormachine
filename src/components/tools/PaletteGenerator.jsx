import { Modal, Button } from "react-bootstrap";

function PaletteGenerator({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Palette Generator</Modal.Title>
      </Modal.Header>
      <Modal.Body>Generate palette here</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PaletteGenerator;

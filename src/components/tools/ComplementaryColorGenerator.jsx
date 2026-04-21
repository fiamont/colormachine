import { Modal, Button } from "react-bootstrap";

function ComplementaryColorGenerator({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Complementary Color Generator</Modal.Title>
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

export default ComplementaryColorGenerator;

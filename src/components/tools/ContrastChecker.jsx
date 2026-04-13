import { Button, Modal } from "react-bootstrap";

function ContrastChecker({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Contrast checker</Modal.Title>
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

export default ContrastChecker;

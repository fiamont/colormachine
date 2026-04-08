import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { generateHexColor, hexToRgb, rgbToHsl } from "../../utils/colorUtils";

function ColorGenerator({ show, handleClose }) {
  const [color, setColor] = useState("#eed06f");

  function generateRandomColor() {
    setColor(generateHexColor());
  }

  function copyToClipboard(value) {
    navigator.clipboard.writeText(value);
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Color Generator</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="secondary" onClick={generateRandomColor}>
          New color
        </Button>
        <div className="d-flex flex-column align-items-center justify-content-center p-3">
          <div
            className="rounded color-container m-2"
            style={{ backgroundColor: color }}
          ></div>
          <div className="w-100 px-3 px-md-5 pt-2">
            <div className="d-flex flex-row justify-content-between align-items-center gap-1 pb-1">
              <p className="m-0 p-0">Hex: {color}</p>
              <Button variant="light" onClick={() => copyToClipboard(color)}>
                Copy
              </Button>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center gap-1 pb-1">
              <p className="m-0 p-0">Rgb: {hexToRgb(color)}</p>
              <Button
                variant="light"
                onClick={() => copyToClipboard(hexToRgb(color))}
              >
                Copy
              </Button>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center gap-1">
              <p className="m-0 p-0">Hsl: {rgbToHsl(color)}</p>
              <Button
                variant="light"
                onClick={() => copyToClipboard(rgbToHsl(color))}
              >
                Copy
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ColorGenerator;

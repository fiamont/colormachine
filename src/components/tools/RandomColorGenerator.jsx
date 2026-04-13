import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  generateRandomHsl,
  hslToHex,
  hslToRgb,
  copyToClipboard,
} from "../../utils/colorUtils";
import ColorInfo from "./ColorInfo";

function RandomColorGenerator({ show, handleClose }) {
  const [color, setColor] = useState(generateRandomHsl());

  function generateRandomColor() {
    setColor(generateRandomHsl());
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Random Color Generator</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center m-0">Click for new random color!</p>
        <div className="d-flex flex-column align-items-center justify-content-center px-3">
          <div
            onClick={generateRandomColor}
            className="rounded color-container m-2"
            style={{ backgroundColor: hslToHex(color) }}
          ></div>
          <div className="w-100 px-3 px-md-5 pt-2">
            <ColorInfo
              label="Hex"
              value={hslToHex(color)}
              onCopy={copyToClipboard}
            />
            <ColorInfo
              label="Rgb"
              value={hslToRgb(color)}
              onCopy={copyToClipboard}
            />
            <ColorInfo
              label="Hsl"
              value={`hsl(${color.h}, ${color.s}%, ${color.l}%)`}
              onCopy={copyToClipboard}
            />
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

export default RandomColorGenerator;

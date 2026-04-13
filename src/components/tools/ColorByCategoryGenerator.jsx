import { Modal, Button } from "react-bootstrap";
import {
  generateHexColor,
  hexToRgb,
  rgbToHsl,
  copyToClipboard,
} from "../../utils/colorUtils";
import ColorInfo from "./ColorInfo";
import { useState } from "react";

function ColorByCategoryGenerator({ show, handleClose }) {
  const [color, setColor] = useState("#eeb96f");

  function generateColor() {
    setColor(generateHexColor());
  }
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Generate color by color category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center">Category: ...</p>
        <p className="text-center m-0">Click for new random color!</p>
        <div className="d-flex flex-column align-items-center justify-content-center px-3">
          <div
            onClick={generateColor}
            className="rounded color-category-container m-2"
            style={{ backgroundColor: color }}
          ></div>
          <div className="w-100 px-3 px-md-5 pt-2">
            <ColorInfo label="Hex" value={color} onCopy={copyToClipboard} />
            <ColorInfo
              label="Rgb"
              value={hexToRgb(color)}
              onCopy={copyToClipboard}
            />
            <ColorInfo
              label="Hsl"
              value={rgbToHsl(color)}
              onCopy={copyToClipboard}
            />
          </div>
          <div>
            <p>Categories:</p>
            <div>
              <Button variant="light" size="sm">
                <p>Purple</p>
              </Button>
              <Button variant="light">
                <p>Blue</p>
              </Button>
              <Button variant="light">
                <p>Green</p>
              </Button>
              <Button variant="light">
                <p>Yellow</p>
              </Button>
              <Button variant="light">
                <p>Orange</p>
              </Button>
              <Button variant="light">
                <p>Red</p>
              </Button>
              <Button variant="light">
                <p>Dark</p>
              </Button>
              <Button variant="light">
                <p>Light</p>
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

export default ColorByCategoryGenerator;

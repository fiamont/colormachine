import { Modal, Button } from "react-bootstrap";
import {
  generateRandomHsl,
  hslToHex,
  hslToRgb,
  colorRanges,
  copyToClipboard,
} from "../../utils/colorUtils";
import ColorInfo from "./ColorInfo";
import { useState } from "react";

function ColorByCategoryGenerator({ show, handleClose }) {
  const [color, setColor] = useState(generateRandomHsl());
  const [category, setCategory] = useState("Random");

  function generatePurple() {
    setColor(generateRandomHsl(colorRanges.purple));
    setCategory("Purple");
  }

  function generateBlue() {
    setColor(generateRandomHsl(colorRanges.blue));
    setCategory("Blue");
  }
  function generateGreen() {
    setColor(generateRandomHsl(colorRanges.green));
    setCategory("Green");
  }
  function generateYellow() {
    setColor(generateRandomHsl(colorRanges.yellow));
    setCategory("Yellow");
  }
  function generateOrange() {
    setColor(generateRandomHsl(colorRanges.orange));
    setCategory("Orange");
  }
  function generateRed() {
    setColor(generateRandomHsl(colorRanges.red));
    setCategory("Red");
  }

  function generateLight() {
    setColor(generateRandomHsl(colorRanges.light));
    setCategory("Light");
  }
  function generateDark() {
    setColor(generateRandomHsl(colorRanges.dark));
    setCategory("Dark");
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Generate color by color category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center m-0 pb-0">
          Click category button for new random color!
        </p>
        <div className="d-flex flex-wrap gap-1 justify-content-center align-items-center">
          <Button variant="light" onClick={generatePurple}>
            Purple
          </Button>
          <Button variant="light" onClick={generateBlue}>
            Blue
          </Button>
          <Button variant="light" onClick={generateGreen}>
            Green
          </Button>
          <Button variant="light" onClick={generateYellow}>
            Yellow
          </Button>
          <Button variant="light" onClick={generateOrange}>
            Orange
          </Button>
          <Button variant="light" onClick={generateRed}>
            Red
          </Button>
          <Button variant="light" onClick={generateLight}>
            Light
          </Button>
          <Button variant="light" onClick={generateDark}>
            Dark
          </Button>
        </div>
        <p className="text-center fw-bold mt-3 mb-0">
          Choosen category: {category}
        </p>
        <div className="d-flex flex-column align-items-center justify-content-center px-3">
          <div
            className="rounded color-category-container m-1"
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

export default ColorByCategoryGenerator;

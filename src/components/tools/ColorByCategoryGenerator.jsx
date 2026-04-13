import { Modal, Button } from "react-bootstrap";
/*import {
  generateHexColor,
  hexToRgb,
  rgbToHsl,
  copyToClipboard,
} from "../../utils/colorUtils";
import ColorInfo from "./ColorInfo";
import { useState } from "react";*/

function ColorByCategoryGenerator({ show, handleClose }) {
  /*const [color, setColor] = useState("#eeb96f");
  const [category, setCategory] = useState("Orange");

  function generatePurple() {
    setColor(generateHexColor());
    setCategory("Purple");
  }

  function generateBlue() {
    setColor(generateHexColor());
    setCategory("Blue");
  }
  function generateGreen() {
    setColor(generateHexColor());
    setCategory("Green");
  }
  function generateYellow() {
    setColor(generateHexColor());
    setCategory("Yellow");
  }
  function generateOrange() {
    setColor(generateHexColor());
    setCategory("Orange");
  }
  function generateRed() {
    setColor(generateHexColor());
    setCategory("Red");
  }

  function generateLight() {
    setColor(generateHexColor());
    setCategory("Light");
  }
  function generateDark() {
    setColor(generateHexColor());
    setCategory("Dark");
  }*/

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Generate color by color category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center m-0 pb-0">
          Click category button for new random color!
        </p>
        {/* <div className="d-flex flex-wrap gap-1 justify-content-center align-items-center">
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
        </div> */}
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

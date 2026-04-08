import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ColorGenerator({ show, handleClose }) {
  const [hexColor, setHexColor] = useState("#eed06f");
  const [rgbColor, setRgbColor] = useState("rgb(238, 208, 111)");
  const [hslColor, setHslColor] = useState("hsl(45, 79%, 68%)");

  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h, s;
    let l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;

      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return `hsl(${Math.round(h * 360)}, ${Math.round(
      s * 100,
    )}%, ${Math.round(l * 100)}%)`;
  }

  function generateRandomColor() {
    const hex = "0123456789ABCDEF";
    let newColor = "#";

    for (let i = 0; i < 6; i++) {
      newColor += hex[Math.floor(Math.random() * 16)];
    }

    const r = parseInt(newColor.slice(1, 3), 16);
    const g = parseInt(newColor.slice(3, 5), 16);
    const b = parseInt(newColor.slice(5, 7), 16);

    const newRgbColor = `rgb(${r}, ${g}, ${b})`;
    const newHslColor = rgbToHsl(r, g, b);

    setHexColor(newColor);
    setRgbColor(newRgbColor);
    setHslColor(newHslColor);
  }

  function copyToClipboard(value) {
    navigator.clipboard.writeText(value);
    console.log("success!");
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
            style={{ backgroundColor: hexColor }}
          ></div>
          <div className="w-100 px-3 px-md-5 pt-2">
            <div className="d-flex flex-row justify-content-between align-items-center gap-1 pb-1">
              <p className="m-0 p-0">Hex: {hexColor}</p>
              <Button variant="light" onClick={() => copyToClipboard(hexColor)}>
                Copy
              </Button>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center gap-1 pb-1">
              <p className="m-0 p-0">Rgb: {rgbColor}</p>
              <Button variant="light" onClick={() => copyToClipboard(rgbColor)}>
                Copy
              </Button>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center gap-1">
              <p className="m-0 p-0">Hsl: {hslColor}</p>
              <Button variant="light" onClick={() => copyToClipboard(hslColor)}>
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

import ColorGenerator from "./tools/ColorGenerator";
import PaletteGenerator from "./tools/PaletteGenerator";
import FontGenerator from "./tools/FontGenerator";
import InspirationGenerator from "./tools/InspirationGenerator";
import { useState } from "react";
import { Button } from "react-bootstrap";

function GeneratorSection() {
  const [activeGenerator, setActiveGenerator] = useState(false);

  const handleShow = () => setActiveGenerator(true);
  const handleClose = () => setActiveGenerator(false);

  return (
    <section className="d-flex flex-column p-4 gap-3">
      <p>Begin your journey with choosing a generator!</p>
      <Button variant="success" size="lg" onClick={handleShow}>
        <h1>Generate color</h1>
      </Button>
      <ColorGenerator show={activeGenerator} handleClose={handleClose} />
      <PaletteGenerator />
      <FontGenerator />
      <InspirationGenerator />
    </section>
  );
}

export default GeneratorSection;

import ColorGenerator from "./tools/ColorGenerator";
import PaletteGenerator from "./tools/PaletteGenerator";
import FontGenerator from "./tools/FontGenerator";
import InspirationGenerator from "./tools/InspirationGenerator";
import { useState } from "react";
import { Button } from "react-bootstrap";

function GeneratorSection() {
  // State: vilken generator är öppen
  const [activeGenerator, setActiveGenerator] = useState(false);

  /* Lista med alla generators
  Varje objekt innehåller:
  - id: unikt namn för generatorn
  - label: text på knappen
  - Component: själva komponenten som ska renderas
  - bgcolor: Bootstrap-knappfärg */
  const generators = [
    {
      id: "color",
      label: "Generate color",
      Component: ColorGenerator,
      bgcolor: "color-btn",
    },
    {
      id: "palette",
      label: "Generate palette",
      Component: PaletteGenerator,
      bgcolor: "palette-btn",
    },
    {
      id: "font",
      label: "Generate font",
      Component: FontGenerator,
      bgcolor: "font-btn",
    },
    {
      id: "word",
      label: "Generate inspiration",
      Component: InspirationGenerator,
      bgcolor: "word-btn",
    },
  ];

  return (
    <section className="d-flex flex-column align-items-center p-4 gap-3">
      <p className="text-center">
        Begin your journey with choosing a generator!
      </p>
      <div className="row g-3">
        {/* -------------------------
          Loopa igenom alla generators
          ------------------------- */}
        {generators.map(({ id, label, Component, bgcolor }) => (
          <div key={id} className="col-12 col-md-6">
            {/* -------------------------
              Knapp som öppnar rätt generator
              ------------------------- */}
            <Button
              variant="light"
              size="lg"
              onClick={() => setActiveGenerator(id)}
              className={`w-100 h-100 ${bgcolor}`}
            >
              <h1 className="text-center fs-2">{label}</h1>
            </Button>

            {/* -------------------------
              Rendera generatorn om den är aktiv
              ------------------------- */}
            {activeGenerator === id && (
              <Component
                show={true} // signalerar till generatorn att den ska visas
                handleClose={() => setActiveGenerator(null)} // stänger generatorn
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default GeneratorSection;

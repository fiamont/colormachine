import RandomColorGenerator from "./tools/RandomColorGenerator";
import PaletteGenerator from "./tools/PaletteGenerator";
import FontGenerator from "./tools/FontGenerator";
import InspirationGenerator from "./tools/InspirationGenerator";
import { useState } from "react";
import { Button } from "react-bootstrap";

function GeneratorSection() {
  const [activeGenerator, setActiveGenerator] = useState(false);

  /* Objektlista med alla generatorer, varje objekt innehåller:
  - id: unikt namn för generatorn
  - label: text på knappen
  - Component: själva komponenten som ska renderas
  - bgcolor: Bootstrap-knappfärg */
  const generators = [
    {
      id: "color",
      label: "Generate random color",
      Component: RandomColorGenerator,
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
    <section className="d-flex flex-column align-items-center pt-0 pb-2 px-4 gap-3">
      <div className="row gt-0 gx-3 gy-3">
        {/* Loopa igenom alla generators */}
        {generators.map(({ id, label, Component, bgcolor }) => (
          <div key={id} className="col-12 col-md-6">
            {/* Knapp som öppnar rätt generator */}
            <Button
              variant="light"
              size="lg"
              onClick={() => setActiveGenerator(id)}
              className={`w-100 h-100 ${bgcolor}`}
            >
              <h1 className="text-center fs-1 generator-btn-text">{label}</h1>
            </Button>

            {/* Rendera generatorn om den är aktiv */}
            {activeGenerator === id && (
              <Component //en Modal
                show={true} // visar generatorn
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

import RandomColorGenerator from "./tools/RandomColorGenerator";
import PaletteGenerator from "./tools/PaletteGenerator";
import FontGenerator from "./tools/FontGenerator";
import InspirationGenerator from "./tools/InspirationGenerator";
import ContrastChecker from "./tools/ContrastChecker";
import ColorByCategoryGenerator from "./tools/ColorByCategoryGenerator";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./ToolSection.css";

function ToolSection() {
  const [activeTool, setActiveTool] = useState(false);

  /* Objektlista med alla generatorer, varje objekt innehåller:
  - id: unikt namn för generatorn
  - label: text på knappen
  - Component: själva komponenten som ska renderas
  - bgcolor: Bootstrap-knappfärg */
  const generators = [
    {
      id: "randomColor",
      label: "Generate random color",
      Component: RandomColorGenerator,
      bgcolor: "random-color-btn",
    },
    {
      id: "colorColor",
      label: "Generate color by category",
      Component: ColorByCategoryGenerator,
      bgcolor: "color-color-btn",
    },
    {
      id: "palette",
      label: "Generate palette",
      Component: PaletteGenerator,
      bgcolor: "palette-btn",
    },
    {
      id: "contrast",
      label: "Contrast checker",
      Component: ContrastChecker,
      bgcolor: "contrast-btn",
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
    <section className="d-flex flex-column w-75 align-items-center pt-0 pb-2 px-4 gap-3">
      <div className="row gt-0 gx-3 gy-3">
        {/* Loopa igenom alla verktyg */}
        {generators.map(({ id, label, Component, bgcolor }) => (
          <div key={id} className="col-12 col-md-6">
            {/* Knapp som öppnar rätt verktyg */}
            <Button
              variant="light"
              size="lg"
              onClick={() => setActiveTool(id)}
              className={`w-100 h-100 ${bgcolor}`}
            >
              <h1 className="text-center fs-1 tools-btn-text">{label}</h1>
            </Button>

            {/* Rendera verktyget om den är aktiv */}
            {activeTool === id && (
              <Component //en Modal
                show={true} // visar Modal
                handleClose={() => setActiveTool(null)} // stänger Modal
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ToolSection;

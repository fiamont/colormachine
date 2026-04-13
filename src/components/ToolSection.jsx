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
      label: "random color",
      Component: RandomColorGenerator,
      explanation: "explanation",
    },
    {
      id: "colorColor",
      label: "color by category",
      Component: ColorByCategoryGenerator,
      explanation: "explanation",
    },
    {
      id: "palette",
      label: "palette",
      Component: PaletteGenerator,
      explanation: "explanation",
    },
    {
      id: "contrast",
      label: "contrast checker",
      Component: ContrastChecker,
      explanation: "explanation",
    },
    {
      id: "font",
      label: "font",
      Component: FontGenerator,
      explanation: "explanation",
    },
    {
      id: "word",
      label: "inspirational words",
      Component: InspirationGenerator,
      explanation: "explanation",
    },
  ];

  return (
    <section className="d-flex flex-column w-75 align-items-center pt-0 pb-2 px-4 gap-3">
      <div className="row gt-0 gx-3 gy-3">
        {/* Loopa igenom alla verktyg */}
        {generators.map(({ id, label, Component, explanation }) => (
          <div key={id} className="col-12 col-md-6">
            {/* Knapp som öppnar rätt verktyg */}
            <div>
              <Button
                variant="light"
                size="lg"
                onClick={() => setActiveTool(id)}
                className="w-100 h-100 tool-btn"
              >
                <h2 className="text-center fs-2 tools-btn-text">{label}</h2>
              </Button>
              <small className="text-muted">{explanation}</small>
            </div>
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

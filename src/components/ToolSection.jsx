import RandomColorGenerator from "./tools/RandomColorGenerator";
import PaletteGenerator from "./tools/PaletteGenerator";
import ComplementaryColorGenerator from "./tools/ComplementaryColorGenerator";
import InspirationGenerator from "./tools/InspirationGenerator";
import ContrastChecker from "./tools/ContrastChecker";
import ColorByCategoryGenerator from "./tools/ColorByCategoryGenerator";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./ToolSection.css";
import toolData from "./../texts/tools.json";

function ToolSection() {
  const [activeTool, setActiveTool] = useState(null);

  const componentMap = {
    randomColor: RandomColorGenerator,
    colorCategory: ColorByCategoryGenerator,
    palette: PaletteGenerator,
    contrast: ContrastChecker,
    complementary: ComplementaryColorGenerator,
    word: InspirationGenerator,
  };

  return (
    <section className="d-flex flex-column w-75 align-items-center pt-0 pb-2 px-4 gap-3">
      <div className="row gt-0 gx-3 gy-3">
        {toolData.map(({ id, label, explanation }) => {
          const Component = componentMap[id];

          return (
            <div key={id} className="col-12 col-md-6">
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

              {activeTool === id && Component && (
                <Component
                  show={true}
                  handleClose={() => setActiveTool(null)}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ToolSection;

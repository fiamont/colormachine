import RandomColorGenerator from "./tools/RandomColorGenerator";
import PaletteGenerator from "./tools/PaletteGenerator";
import ComplementaryColorGenerator from "./tools/ComplementaryColorGenerator";
import ColorBlindnessSimulator from "./tools/ColorBlindnessSimulator";
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
    complementary: ComplementaryColorGenerator,
    contrast: ContrastChecker,
    palette: PaletteGenerator,
    blind: ColorBlindnessSimulator,
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

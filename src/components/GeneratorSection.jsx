import ColorGenerator from "./tools/ColorGenerator";
import PaletteGenerator from "./tools/PaletteGenerator";
import FontGenerator from "./tools/FontGenerator";
import InspirationGenerator from "./tools/InspirationGenerator";

function GeneratorSection() {
  return (
    <section className="d-flex flex-column p-4 gap-3">
      <p>Begin your journey with choosing a generator!</p>
      <ColorGenerator />
      <PaletteGenerator />
      <FontGenerator />
      <InspirationGenerator />
    </section>
  );
}

export default GeneratorSection;

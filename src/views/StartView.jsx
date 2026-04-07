import Hero from "../components/hero/Hero";
import ColorGenerator from "../components/tools/ColorGenerator";
import ContrastChecker from "../components/tools/ContrastChecker";
import FontGenerator from "../components/tools/FontGenerator";
import InspirationGenerator from "../components/tools/InspirationGenerator";
import PaletteGenerator from "../components/tools/PaletteGenerator";

function StartView() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
      <Hero />
      <section className="d-flex flex-column gap-4 py-3">
        <p className="text-center m-0">Begin with using a generator</p>
        <ColorGenerator />
        <PaletteGenerator />
        <FontGenerator />
        <InspirationGenerator />
      </section>
      <section className="d-flex flex-column gap-4 py-3">
        <p className="text-center m-0">Or try any other tool</p>
        <ContrastChecker />
      </section>
    </div>
  );
}

export default StartView;

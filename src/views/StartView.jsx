import GeneratorSection from "../components/GeneratorSection";
import Hero from "../components/hero/Hero";
import ContrastChecker from "../components/tools/ContrastChecker";

function StartView() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Hero />
      <section className="pt-4 pb-0 px-4">
        <h4>Welcome to Design machine!</h4>
        <p>
          Are you in the process of starting a new design project? Need
          something to start your brainstorming with, or stuck choosing colors?
        </p>
      </section>
      <GeneratorSection />
      <section className="d-flex flex-column gap-4 py-3">
        <p className="text-center m-0">Or try any other tool</p>
        <ContrastChecker />
      </section>
    </div>
  );
}

export default StartView;

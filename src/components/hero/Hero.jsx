import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container pe-2 pe-md-5 py-0 d-flex flex-column justify-content-start align-items-end">
      <h1 className="text-end hero-heading">Color machine</h1>
      <h2 className="text-end hero-subheading">
        Tools for faster color decisions.
      </h2>
    </div>
  );
}

export default Hero;

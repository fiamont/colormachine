import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container p-4 d-flex flex-column justify-content-center align-items-end">
      <h1 className="text-end hero-heading">Design machine</h1>
      <h2 className="text-end hero-subheading">
        Tools for faster design decisions.
      </h2>
    </div>
  );
}

export default Hero;

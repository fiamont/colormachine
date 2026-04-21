import Hero from "../components/hero/Hero";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import arrowLeft from "./../assets/ArrowLeft.png";
import arrowRight from "./../assets/ArrowRight.png";

function StartView() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Hero />
      <section className="w-100 p-3 p-md-5 pb-0">
        <p className="ps-1 ps-md-5 fs-4">
          Are you in the process of starting a new design project?
        </p>
        <p className="ps-1 ps-md-5">
          Need something to start your brainstorming with, or stuck choosing
          colors?
        </p>
      </section>

      <section className="pt-0 px-md-4 pb-5 mb-4 d-flex flex-column w-100 align-items-center">
        <div className="d-flex flex-row align-items-center gap-2 gap-sm-4 px-2">
          <img src={arrowLeft} alt="arrow" />
          <p className="text-center">
            Start your colorful journey by choosing an option:
          </p>
          <img src={arrowRight} alt="arrow" />
        </div>
        <div className="d-flex flex-column flex-md-row w-75 justify-content-center align-items-center">
          <div className="p-2">
            <Button
              as={Link}
              to="/tools"
              variant="light"
              className="tools-btn"
              size="lg"
            >
              Tools
            </Button>
          </div>
          <div className="p-2">
            <Button
              as={Link}
              to="/tips"
              variant="light"
              className="tips-btn"
              size="lg"
            >
              Tips
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StartView;

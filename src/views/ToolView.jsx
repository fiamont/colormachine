import ToolSection from "../components/ToolSection";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import arrowLeft from "./../assets/ArrowLeft.png";
import arrowRight from "./../assets/ArrowRight.png";

function ToolView() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="tools-heading">Tools</h2>
      <div className="d-flex flex-row align-items-center gap-2 gap-sm-4 p-2 pb-4">
        <img src={arrowLeft} alt="arrow" />
        <p className="text-center fs-4">Start by choosing a tool</p>
        <img src={arrowRight} alt="arrow" />
      </div>
      <ToolSection />
      <p className="pt-5 pb-0">Feeling stuck? Need help?</p>
      <Button as={Link} to="/tips" variant="light" className="tips-btn mb-4">
        Find tips here
      </Button>
    </div>
  );
}

export default ToolView;

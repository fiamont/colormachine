import ToolSection from "../components/ToolSection";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function ToolView() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Tools</h1>
      <p>Start by choosing a tool</p>
      <ToolSection />
      <p>Feeling stuck? Need help?</p>
      <Button as={Link} to="/tips" variant="light" className="tips-btn">
        Find tips here
      </Button>
    </div>
  );
}

export default ToolView;

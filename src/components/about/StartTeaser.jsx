import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./AboutComponents.css";

function StartTeaser() {
  return (
    <Button
      as={Link}
      className="start-teaser-container shadow p-4 w-100 rounded"
      variant="light"
      to="/tools"
    >
      <p className="text-center m-0 p-0">Start the spark here</p>
    </Button>
  );
}

export default StartTeaser;

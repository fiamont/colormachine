import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./AboutComponents.css";

function ToTips({ text }) {
  return (
    <Button
      as={Link}
      className="to-tips-container shadow p-4 w-100 rounded"
      variant="light"
      to="/tips"
    >
      <p className="text-center m-0 p-0">{text.tips.button}</p>
    </Button>
  );
}

export default ToTips;

import { Button } from "react-bootstrap";
import "./AboutComponents.css";

function ToPortfolio({ text }) {
  return (
    <Button
      className="to-portfolio-container shadow p-4 w-100 rounded"
      href={text.link.uri}
      target="_blank"
      rel="noopener noreferrer"
      variant="light"
    >
      <p className="text-center m-0 p-0">{text.link.text}</p>
    </Button>
  );
}

export default ToPortfolio;

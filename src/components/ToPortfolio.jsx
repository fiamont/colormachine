import { Button } from "react-bootstrap";

function ToPortfolio({ text }) {
  return (
    <div className="d-flex flex-column to-portfolio-container shadow-lg p-4 rounded align-self-end">
      <p className="text-center">{text.link.before} </p>
      <Button
        href={text.link.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="w-75 align-self-center"
        variant="light"
      >
        {text.link.linktext}
      </Button>
    </div>
  );
}

export default ToPortfolio;

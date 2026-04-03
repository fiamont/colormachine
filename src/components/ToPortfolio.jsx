import { Button } from "react-bootstrap";

function ToPortfolio({ text }) {
  return (
    <div className="d-flex flex-column align-self-center m-2 m-sm-4 p-4 shadow rounded to-portfolio-container w-75">
      <p className="text-center">{text.link.before} </p>
      <Button
        href={text.link.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="w-75 align-self-center link"
        variant="outline-secondary"
      >
        {text.link.linktext}
      </Button>
    </div>
  );
}

export default ToPortfolio;

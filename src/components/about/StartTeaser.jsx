import { Link } from "react-router-dom";
import "./AboutComponents.css";

function StartTeaser() {
  return (
    <div className="d-flex justify-content-center align-items-center shadow rounded m-2 start-teaser-container">
      <Link className="text-center p-2 m-0 teaser-link" to="/">
        Start your design journey now
      </Link>
    </div>
  );
}

export default StartTeaser;

import { Link } from "react-router-dom";

function StartTeaser() {
  return (
    <div className="d-flex justify-content-center align-items-center shadow rounded m-2 geting-started-teaser-container">
      <Link className="text-center p-2 m-0 teaser-link" to="/">
        Start your design journey now
      </Link>
    </div>
  );
}

export default StartTeaser;

import { Link } from "react-router-dom";
import "./Navigation.css";

function Footer() {
  return (
    <div className="d-flex flex-column align-items-center bg-light">
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-4 py-3 px-5 mx-3 mt-1">
        <Link to="/" className="navigation-link">
          <p className="p-0 m-0">Home</p>
        </Link>
        <Link to="/about" className="navigation-link">
          <p className="p-0 m-0">About</p>
        </Link>
        <Link to="/contact" className="navigation-link">
          <p className="p-0 m-0">Contact</p>
        </Link>
        <Link to="/tools" className="navigation-link">
          <p className="p-0 m-0">Tools</p>
        </Link>
        <Link to="/tips" className="navigation-link">
          <p className="p-0 m-0">Tips</p>
        </Link>
      </div>
      <p>{"\u00A9"} 2026 Design Machine</p>
    </div>
  );
}

export default Footer;

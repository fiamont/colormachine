import { Link } from "react-router-dom";
import "./Navigation.css";

function Footer() {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex flex-row gap-4">
        <Link to="/about" className="navigation-link">
          <p>About</p>
        </Link>
        <Link to="/contact" className="navigation-link">
          <p>Contact</p>
        </Link>
      </div>
      <p>{"\u00A9"} 2026 Design Machine</p>
    </div>
  );
}

export default Footer;

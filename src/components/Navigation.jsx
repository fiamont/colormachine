import { Link } from "react-router-dom";
import colorCogs from "./../assets/engineering.png";

function Navigation() {
  return (
    <div className="d-flex flex-row justify-content-start p-4">
      <Link to="/" className="navigation-brand">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img src={colorCogs} alt="Color cogs" className="pe-1 color-cogs" />
          <h1 className="ps-1 text-center fs-3">Design machine</h1>
        </div>
      </Link>
    </div>
  );
}

export default Navigation;

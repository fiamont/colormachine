import tips from "./../texts/tips.json";
import ToContact from "../components/about/ToContact";
import colors from "./../assets/colors.jpg";
import colorSplash from "./../assets/colorsplash.jpg";
import colorCorridor from "./../assets/colorcorridor.jpg";
import messy from "./../assets/messy.jpg";
import { Link } from "react-router-dom";

function TipsView() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 p-2 p-md-5">
      <h1>{tips.title}</h1>
      <h4 className="p-2 px-sm-4">{tips.introduction}</h4>
      <p className="px-2 px-sm-4 pb-3 align-self-start">
        Learn about som color{" "}
        <a className="tips-link" href="#basics">
          basics
        </a>
        , get some{" "}
        <a className="tips-link" href="#practical">
          practical tips and tricks
        </a>
        , learn about{" "}
        <a className="tips-link" href="#accessibility">
          accessibility
        </a>{" "}
        and some{" "}
        <a className="tips-link" href="#designer">
          designer do's and don'ts
        </a>
        .
      </p>

      <div className="d-flex flex-column gap-3 w-100 px-sm-5">
        <div className="d-flex flex-column">
          <div
            className="d-flex flex-row-reverse align-items-center"
            id="basics"
          >
            <div className="d-flex flex-column gap-3 align-items-center">
              <img
                src={colorSplash}
                alt="Splashy colors"
                className="shadow rounded tips-img m-2"
              />
              <ul>
                <li>{tips.basics.list[0]}</li>
                <li>{tips.basics.list[1]}</li>
                <li>{tips.basics.list[2]}</li>
              </ul>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center p-2">
              <h4 className="text-center tips-heading">
                {tips.basics.heading}
              </h4>
              <p>{tips.basics.intro}</p>
            </div>
          </div>
          <p className="p-2">{tips.basics.text[0]}</p>
          <p className="text-center">
            relevant links to relevant{" "}
            <Link className="tips-link" to="/tools">
              tools
            </Link>{" "}
            here
          </p>
        </div>

        <div className="d-flex flex-column">
          <div className="d-flex flex-row align-items-center" id="practical">
            <div className="d-flex flex-column gap-3 align-items-center">
              <img
                src={colors}
                alt="red blue yellow colors"
                className="shadow rounded tips-img m-2"
              />
              <ul>
                <li>{tips.practical.list[0]}</li>
                <li>{tips.practical.list[1]}</li>
                <li>{tips.practical.list[2]}</li>
              </ul>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center p-2">
              <h4 className="text-center tips-heading">
                {tips.practical.heading}
              </h4>
              <p>{tips.practical.intro}</p>
            </div>
          </div>
          <p className="p-2">{tips.practical.text[0]}</p>
          <p className="p-2">{tips.practical.text[1]}</p>
          <p className="p-2">{tips.practical.text[2]}</p>
          <p className="text-center">
            relevant links to relevant{" "}
            <Link className="tips-link" to="/tools">
              tools
            </Link>{" "}
            here
          </p>
        </div>

        <div className="d-flex flex-column">
          <div
            className="d-flex flex-row-reverse align-items-center"
            id="accessibility"
          >
            <div className="d-flex flex-column gap-3 align-items-center">
              <img
                src={colorCorridor}
                alt="rainbow colors in a corridor"
                className="shadow rounded tips-img m-2"
              />
              <ul>
                <li>{tips.accessibility.list[0]}</li>
                <li>{tips.accessibility.list[1]}</li>
                <li>{tips.accessibility.list[2]}</li>
              </ul>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center p-2">
              <h4 className="text-center tips-heading">
                {tips.accessibility.heading}
              </h4>
              <p>{tips.accessibility.intro}</p>
            </div>
          </div>
          <p className="p-2">{tips.accessibility.text[0]}</p>
          <p className="p-2">{tips.accessibility.text[1]}</p>
          <p className="text-center">
            relevant links to relevant{" "}
            <Link className="tips-link" to="/tools">
              tools
            </Link>{" "}
            here
          </p>
        </div>

        <div className="d-flex flex-column">
          <div className="d-flex flex-row align-items-center" id="designer">
            <div className="d-flex flex-column gap-3 align-items-center">
              <img
                src={messy}
                alt="Messy colors"
                className="shadow rounded tips-img m-2"
              />
              <ul>
                <li>{tips.designer.list[0]}</li>
                <li>{tips.designer.list[1]}</li>
                <li>{tips.designer.list[2]}</li>
              </ul>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center p-2">
              <h4 className="text-center tips-heading">
                {tips.designer.heading}
              </h4>
              <p>{tips.designer.intro}</p>
            </div>
          </div>
          <p className="p-2">{tips.designer.text[0]}</p>
          <p className="text-center">
            relevant links to relevant{" "}
            <Link className="tips-link" to="/tools">
              tools
            </Link>{" "}
            here
          </p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center p-3">
          <p>{tips.contact.text}</p>
          <div className="pb-4">
            <ToContact text={tips} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipsView;

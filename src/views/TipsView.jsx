import tips from "./../texts/tips.json";
import ToContact from "../components/about/ToContact";
import colors from "./../assets/colors.jpg";
import colorSplash from "./../assets/colorsplash.jpg";
import colorCorridor from "./../assets/colorcorridor.jpg";
import messy from "./../assets/messy.jpg";
import TipsSection from "../components/TipsSection";
import { Link } from "react-router-dom";

function TipsView() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 p-2 p-md-5">
      <h2>{tips.title}</h2>
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

      <div className="d-flex flex-column gap-3 w-100 px-sm-4">
        <TipsSection
          id="basics"
          reverse
          img={colorSplash}
          alt="Splashy colors"
          heading={tips.basics.heading}
          intro={tips.basics.intro}
          list={tips.basics.list}
          text={tips.basics.text}
        />

        <TipsSection
          id="practical"
          img={colors}
          alt="Red blue yellow colors"
          heading={tips.practical.heading}
          intro={tips.practical.intro}
          list={tips.practical.list}
          text={tips.practical.text}
        />

        <TipsSection
          id="accessibility"
          reverse
          img={colorCorridor}
          alt="Rainbow colors in a corridor"
          heading={tips.accessibility.heading}
          intro={tips.accessibility.intro}
          list={tips.accessibility.list}
          text={tips.accessibility.text}
        />

        <TipsSection
          id="designer"
          img={messy}
          alt="Messy colors"
          heading={tips.designer.heading}
          intro={tips.designer.intro}
          list={tips.designer.list}
          text={tips.designer.text}
        />
        <section className="d-flex flex-column justify-content-center align-items-center p-3">
          <p>{tips.contact.text}</p>
          <div className="pb-4">
            <ToContact text={tips} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default TipsView;

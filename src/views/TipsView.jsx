import tips from "./../texts/tips.json";
import ToContact from "../components/about/ToContact";
import colors from "./../assets/colors.jpg";
import colorSplash from "./../assets/colorsplash.jpg";
import colorCorridor from "./../assets/colorcorridor.jpg";
import StartTeaser from "./../components/about/StartTeaser";

function TipsView() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>{tips.title}</h1>
      <h4 className="p-3">{tips.introduction}</h4>
      <div className="d-flex flex-row justify-content-center align-items-center p-3 gap-2">
        <p>
          Learn about som color basics, get som practical tips and tricks, learn
          about accessibility and some designer do's and don'ts.
        </p>
        <div className="d-flex flex-column">
          <p>Do you want to try any of the tools first?</p>
          <StartTeaser />
        </div>
      </div>

      <div>
        <div className="d-flex flex-row justify-content-center align-items-center p-2 gap-2">
          <img
            src={colors}
            alt="red blue yellow colors"
            className="shadow rounded tips-img"
          />
          <div>
            <h4>{tips.basics.heading}</h4>
            <p>{tips.basics.text}</p>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-center align-items-center p-2 gap-2">
          <div>
            <h4>{tips.practical.heading}</h4>
            <p>{tips.practical.text}</p>
          </div>
          <img
            src={colorSplash}
            alt="Splashy colors"
            className="shadow rounded tips-img"
          />
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center p-2 gap-2">
          <img
            src={colorCorridor}
            alt="rainbow colors in a corridor"
            className="shadow rounded tips-img"
          />
          <div>
            <h4>{tips.accessibility.heading}</h4>
            <p>{tips.accessibility.text}</p>
          </div>
        </div>
        <div className="p-3">
          <h4>{tips.designer.heading}</h4>
          <p>{tips.designer.text}</p>
        </div>
      </div>
      <div className="p-4">
        <p>{tips.contact.text}</p>
        <ToContact text={tips} />
      </div>
    </div>
  );
}

export default TipsView;

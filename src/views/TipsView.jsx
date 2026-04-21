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
      <p>{tips.introduction}</p>
      <div>
        <StartTeaser />
      </div>
      <div>
        <div className="d-flex flex-row justify-content-center align-items-center p-2 gap-2">
          <img
            src={colors}
            alt="red blue yellow colors"
            className="shadow rounded tips-img"
          />
          <p>{tips.sections[0]}</p>
        </div>

        <div className="d-flex flex-row justify-content-center align-items-center p-2 gap-2">
          <p>{tips.sections[1]}</p>
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
          <p>{tips.sections[2]}</p>
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

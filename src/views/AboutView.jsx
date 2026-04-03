import ToContact from "../components/about/ToContact";
import ToPortfolio from "../components/about/ToPortfolio";
import StartTeaser from "../components/about/StartTeaser";
import aboutText from "./../texts/about.json";

function AboutView() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3 p-md-4 mb-4">
      <h2 className="text-center">{aboutText.title}</h2>
      <div className="d-flex flex-column p-4 p-lg-5 mt-lg-2 mb-lg-5 mx-lg-5 bg-white">
        <h4 className="text-center">{aboutText.introduction}</h4>
        <div className="py-3">
          <p>{aboutText.sections[0]}</p>
          <div className="d-flex flex-row justify-content-center align-items-center mb-3">
            <p className="m-0">{aboutText.sections[1]}</p>
            <StartTeaser />
          </div>
          <p>{aboutText.sections[2]}</p>
        </div>
        <ToContact text={aboutText} />
        <ToPortfolio text={aboutText} />
      </div>
    </div>
  );
}

export default AboutView;

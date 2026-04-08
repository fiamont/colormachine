import ToContact from "../components/about/ToContact";
import ToPortfolio from "../components/about/ToPortfolio";
import StartTeaser from "../components/about/StartTeaser";
import aboutText from "./../texts/about.json";

function AboutView() {
  return (
    <div className="d-flex flex-column gap-3 p-md-4 mb-4 about-background">
      <h2 className="text-center about-title mb-0 pb-0">{aboutText.title}</h2>
      <div className="d-flex flex-column pt-0 p-4 p-lg-5 mt-0 mb-lg-5 mx-lg-5">
        <div className="d-flex flex-column gap-3">
          <div className="about-text-container align-self-center shadow rounded p-3 m-0 w-100">
            <h4 className="text-center">{aboutText.introduction}</h4>
            <p className="p-0 m-0 w-100 align-self-end text-center">
              {aboutText.sections[0]}
            </p>
          </div>
          <div className="p-0 m-0 w-75 align-self-start">
            <StartTeaser />
          </div>
          <p className="about-text-container p-3 m-0 w-75 align-self-center text-center rounded shadow">
            {aboutText.sections[1]}
          </p>
          <div className="p-0 m-0 w-75 align-self-end">
            <ToContact text={aboutText} />
          </div>
          <p className="about-text-container p-3 m-0 w-75 align-self-start text-start rounded shadow">
            {aboutText.sections[2]}
          </p>
          <div className="p-0 m-0 w-75 align-self-center">
            <ToPortfolio text={aboutText} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutView;

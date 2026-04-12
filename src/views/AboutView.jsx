import ToContact from "../components/about/ToContact";
import ToPortfolio from "../components/about/ToPortfolio";
import StartTeaser from "../components/about/StartTeaser";
import aboutText from "./../texts/about.json";

function AboutView() {
  return (
    <div className="d-flex flex-column gap-3 p-md-4 mb-4">
      <h2 className="text-center about-title mb-0 pb-0">{aboutText.title}</h2>
      <div className="d-flex flex-column pt-0 p-4 p-lg-5 mt-0 mb-lg-5 mx-lg-5">
        <div className="d-flex flex-column gap-3">
          <div className="align-self-center p-3 m-0 w-100">
            <h4 className="pb-3 text-center">{aboutText.introduction}</h4>
            <p className="p-0 pb-2 m-0 w-100 align-self-end text-center">
              {aboutText.sections[0]}
            </p>
          </div>
          <div className="p-0 pb-2 m-0 w-75 align-self-end">
            <StartTeaser />
          </div>
          <p className="p-3 pb-2 m-0 w-75 align-self-start text-center">
            {aboutText.sections[1]}
          </p>
          <p className="p-3 pb-3 m-0 w-75 align-self-end text-center">
            {aboutText.sections[2]}
          </p>
          <p className="p-3 pb-0 m-0 w-75 align-self-start text-center">
            {aboutText.contact.text}
          </p>
          <div className="p-0 pb-2 m-0 w-75 align-self-start">
            <ToContact text={aboutText} />
          </div>
          <p className="p-3 pb-0 m-0 w-75 align-self-center text-center">
            {aboutText.portfolio.text}
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

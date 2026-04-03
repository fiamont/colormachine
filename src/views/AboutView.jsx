import ToContact from "../components/ToContact";
import ToPortfolio from "../components/ToPortfolio";
import aboutText from "./../texts/about.json";

function AboutView() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3 p-4">
      <h2 className="text-center">{aboutText.title}</h2>
      <div className="d-flex flex-column px-md-5 pb-md-5 m-lg-5">
        <h4 className="text-center">{aboutText.introduction}</h4>
        <div className="pt-3 pb-5">
          {aboutText.sections.map((section, index) => (
            <p key={index}>{section}</p>
          ))}
        </div>
        <ToContact text={aboutText} />
        <ToPortfolio text={aboutText} />
      </div>
    </div>
  );
}

export default AboutView;

import aboutText from "./../texts/about.json";

function AboutView() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3 p-4">
      <h2 className="text-center">{aboutText.title}</h2>
      <div className="p-2 p-sm-5">
        <h4 className="text-center">{aboutText.introduction}</h4>
        <div>
          {aboutText.sections.map((section, index) => (
            <p key={index}>{section}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutView;

import { Link } from "react-router-dom";

function TipsSection({
  id,
  reverse,
  img,
  alt,
  heading,
  intro,
  list = [],
  sections = [],
}) {
  return (
    <section className="d-flex flex-column bg-light p-4 p-lg-5 my-2 rounded gap-2">
      <div className="d-flex flex-column flex-md-row">
        <div>
          <h4 className="text-center tips-heading p-2" id={id}>
            {heading}
          </h4>
          <p>{intro}</p>
          <div>
            {sections.map((section, index) => (
              <div key={index}>
                <h5 className="mb-1">{section.underheading}</h5>
                <p className="mb-3">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center gap-4">
          <div className="d-flex flex-column gap-3 align-items-center align-self-center">
            <img src={img} alt={alt} className="shadow rounded tips-img m-2" />
          </div>
          <ul className="d-flex flex-column justify-content-center align-items-center py-2">
            {list.map((item, index) => (
              <li key={index} className="mx-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center">
        relevant links to relevant{" "}
        <Link className="tips-link" to="/tools">
          tools
        </Link>{" "}
        here
      </p>
    </section>
  );
}

export default TipsSection;

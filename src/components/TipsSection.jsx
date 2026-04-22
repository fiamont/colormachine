import { Link } from "react-router-dom";

function TipsSection({ id, reverse, img, alt, heading, intro, list, text }) {
  return (
    <section className="d-flex flex-column bg-light p-2 rounded">
      <div
        className={`d-flex flex-column ${
          reverse ? "flex-sm-row-reverse" : "flex-sm-row"
        } align-items-start`}
        id={id}
      >
        <div className="d-flex flex-column gap-3 align-items-center align-self-center">
          <img src={img} alt={alt} className="shadow rounded tips-img m-2" />
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center p-2">
          <h4 className="text-center tips-heading p-2">{heading}</h4>
          <p>{intro}</p>
        </div>
      </div>
      <ul className="d-flex flex-row flex-wrap justify-content-center align-items-center">
        <li className="mx-3">{list[0]}</li>
        <li className="mx-3">{list[1]}</li>
        <li className="mx-3">{list[2]}</li>
      </ul>
      <p className="p-2">{text[0]}</p>
      <p className="p-2">{text[1]}</p>
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

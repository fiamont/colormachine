import { Link } from "react-router-dom";

function TipsSection({
  id,
  reverse,
  img,
  alt,
  heading,
  intro,
  list,
  underheading,
  text,
}) {
  return (
    <section className="d-flex flex-column flex-md-row bg-light p-4 my-2 rounded gap-2">
      <div>
        <h4 className="text-center tips-heading p-2">{heading}</h4>
        <p>{intro}</p>
        <div>
          <h5 className="pb-0">{underheading[0]}</h5>
          <p className="pt-0 pb-2">{text[0]}</p>
          <h5 className="pb-0">{underheading[1]}</h5>
          <p className="pt-0 pb-2">{text[1]}</p>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center gap-4">
        <div className="d-flex flex-column gap-3 align-items-center align-self-center">
          <img src={img} alt={alt} className="shadow rounded tips-img m-2" />
        </div>
        <ul className="d-flex flex-column justify-content-center align-items-center py-2">
          <li className="mx-3">{list[0]}</li>
          <li className="mx-3">{list[1]}</li>
          <li className="mx-3">{list[2]}</li>
        </ul>
        <p className="text-center">
          relevant links to relevant{" "}
          <Link className="tips-link" to="/tools">
            tools
          </Link>{" "}
          here
        </p>
      </div>
    </section>
  );
}

export default TipsSection;

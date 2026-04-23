import up from "./../assets/ArrowUp.png";
import "./ToTopArrow.css";

function ToTopArrow() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="to-top-btn" onClick={handleClick}>
      <img src={up} alt="Scroll to top" />
    </button>
  );
}

export default ToTopArrow;

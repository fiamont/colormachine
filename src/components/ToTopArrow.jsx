import up from "./../assets/ArrowUp.png";
import "./ToTopArrow.css";
import { useState, useEffect } from "react";

function ToTopArrow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button className="to-top-btn" onClick={handleClick}>
      <img src={up} alt="Scroll to top" />
    </button>
  );
}

export default ToTopArrow;

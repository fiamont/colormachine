import up from "./../assets/ArrowUp.png";

function ToTopArrow() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={handleClick}>
      <img src={up} alt="Scroll to top" />
    </button>
  );
}

export default ToTopArrow;

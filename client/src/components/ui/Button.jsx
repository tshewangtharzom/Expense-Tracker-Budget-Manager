
function Button({ text, onClick, type = "button" }) {
  return (
    <button
      className="common-button"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;


function Button({ children, onClick }) {
  return (
    <button className="common-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

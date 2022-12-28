const Button = ({ label, styling, onClick }) => {
  return (
    <button className={styling} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

const Button = ({ className, title, onClick, args, text, disabled }) => {
  return (
    <button
      className={className}
      title={title}
      onClick={() => onClick(args)}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "error",
};

export default Button;

import P from "prop-types";

export const Button = ({ children, disabled = false, onButtonClick }) => {
  return (
    <button
      style={{ fontSize: "60px" }}
      disabled={disabled}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
  disabled: P.bool,
};

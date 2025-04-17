import PropTypes from "prop-types";

export default function Button({
  label,
  name,
  onClick,
  className,
  disabled,
  ariaLabel,
}) {
  return (
    <button
      className={`btn btn-${name} ${className || ""}`}
      onClick={onClick}
      aria-label={ariaLabel || label}
      type="button"
      disabled={disabled}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.oneOf(["Cv", "Contact"]).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

Button.defaultProps = {
  className: "",
  disabled: false,
  ariaLabel: "",
};

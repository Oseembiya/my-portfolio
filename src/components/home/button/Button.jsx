import PropTypes from "prop-types";

export default function Button({
  label,
  name,
  onClick,
  className = "",
  disabled = false,
  ariaLabel = "",
}) {
  return (
    <button
      className={`custom-button custom-button-${name} ${className || ""}`}
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

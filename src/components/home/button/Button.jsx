import PropTypes from "prop-types";

export default function Button({ label, name, onClick }) {
  return (
    <button 
      className={`btn btn-${name.toLowerCase()}`} 
      onClick={onClick} 
      aria-label={label}
      type="button"
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.oneOf(['cv', 'contact']).isRequired,
  onClick: PropTypes.func.isRequired
}; 
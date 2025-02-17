import PropTypes from "prop-types";

export default function Button({ label, name, onClick}) {
  return (
    <button 
      className={`btn btn-${name}`}
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
  name: PropTypes.oneOf(['Cv', 'Contact']).isRequired,
  onClick: PropTypes.func.isRequired,

};
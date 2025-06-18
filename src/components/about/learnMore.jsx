import PropTypes from "prop-types";

export default function LearnMore({ onClick }) {
  return (
    <button
      className="learnMore"
      onClick={onClick}
      type="button"
      aria-label="Learn more about this item"
    >
      <span>Get To know More</span>
    </button>
  );
}

LearnMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

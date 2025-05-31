import PropTypes from "prop-types";

/**
 * LearnMore Button Component
 * A reusable button component for triggering learn more actions
 * @param {Object} props - Component props
 * @param {Function} props.onClick - Function to call when button is clicked
 * @returns {JSX.Element} Learn more button element
 */
export default function LearnMore({ onClick }) {
  return (
    <button
      className="learnMore"
      onClick={onClick}
      type="button"
      aria-label="Learn more about this item"
    >
      <span>Learn More</span>
    </button>
  );
}

LearnMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

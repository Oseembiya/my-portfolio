import PropTypes from "prop-types";

export default function LearnMore({ onClick }) {
  return (
    <button className="learnMore" onClick={onClick}>
      <span>Learn More</span>
    </button>
  );
}

LearnMore.propTypes = {
  onClick: PropTypes.func,
};

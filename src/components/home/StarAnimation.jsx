import { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";

// Star component for background animation
const Star = ({ delay, duration, size, left, top }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`star ${isVisible ? "visible" : ""}`}
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};

// PropTypes validation
Star.propTypes = {
  delay: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
};

// StarField component to manage multiple stars
const StarField = () => {
  const stars = useMemo(() => {
    const starArray = [];
    for (let i = 0; i < 20; i++) {
      starArray.push({
        id: i,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4, // 3-7 seconds
        size: 2 + Math.random() * 3, // 2-5px
        left: Math.random() * 100,
        top: Math.random() * 100,
      });
    }
    return starArray;
  }, []);

  return (
    <div className="star-field">
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
    </div>
  );
};

export default StarField;

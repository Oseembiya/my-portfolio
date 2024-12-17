import { useState } from "react";
import "./Project.css";

export default function Project() {
  const items = [
    "Front-End Developer",
    "Back-End",
    "Software Engineer",
    "Ux-Design",
  ];
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide index
  const [startX, setStartX] = useState(0); // Starting touch position
  const [translateX, setTranslateX] = useState(0); // For temporary swipe position
  const [isSwiping, setIsSwiping] = useState(false); // Control transition

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX); // Store the starting touch position
    setIsSwiping(true); // Temporarily disable transition
  };

  const handleTouchMove = (event) => {
    const currentX = event.touches[0].clientX;
    const deltaX = currentX - startX;
    setTranslateX(deltaX); // Update swipe distance
  };

  const handleTouchEnd = () => {
    // Determine swipe direction and threshold
    if (translateX > 50 && currentIndex > 0) {
      // Swiped Right
      setCurrentIndex(currentIndex - 1);
    } else if (translateX < -50 && currentIndex < items.length - 1) {
      // Swiped Left
      setCurrentIndex(currentIndex + 1);
    }
    setTranslateX(0); // Reset temporary swipe distance
    setIsSwiping(false); // Re-enable transition
  };

  return (
    <div className="container-fluid project_2336">
      <h1>Project Showcase</h1>
      <div
        className="showList_2336"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <div
          className="showCase_2336"
          style={{
            transform: `translateX(calc(-${currentIndex} * 100% + ${translateX}px))`,
            transition: isSwiping ? "none" : "transform 0.3s ease-in-out",
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="slideList_2336">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="projectList">1</div>
    </div>
  );
}

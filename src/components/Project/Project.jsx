import { useState } from "react";
import "./Project.css";
import ProjectDetails from "./ProjectList"; // Import ProjectDetails

export default function Project() {
  const sections = ProjectDetails.map((section) => section.section); // Section names
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide index
  const [startX, setStartX] = useState(0); // Starting touch position
  const [translateX, setTranslateX] = useState(0); // For temporary swipe position
  const [isSwiping, setIsSwiping] = useState(false); // Control transition

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (event) => {
    const currentX = event.touches[0].clientX;
    const deltaX = currentX - startX;
    setTranslateX(deltaX);
  };

  const handleTouchEnd = () => {
    if (translateX > 50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (translateX < -50 && currentIndex < sections.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    setTranslateX(0);
    setIsSwiping(false);
  };

  return (
    <div className="container-fluid project_2336">
      <h1>Project Showcase</h1>

      {/* Swappable Section Titles */}
      <div
        className="showList_2336"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="showCase_2336"
          style={{
            transform: `translateX(calc(-${currentIndex} * 100% + ${translateX}px))`,
            transition: isSwiping ? "none" : "transform 0.3s ease-in-out",
          }}
        >
          {ProjectDetails.map((section, index) => (
            <div key={index} className="slideList_2336">
              <h5>{section.section}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Projects for the Current Section */}
      <div className="projects_2336">
        {ProjectDetails[currentIndex].projects.map((project, index) => (
          <div key={index} className=" projectItem_2336">
            <a href={project.href} target="_blank" rel="websiteURL">
              <img
                src={project.image}
                alt={project.projectName}
                style={{ width: `${project.imageSize}px`, height: "auto" }}
              />
              <p>{project.projectName}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* Pagination Dots 
      <div className="pagination_2336">
        {sections.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`dot ${index === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div> */
}

/* eslint-disable react/prop-types */
import { useState } from "react";
import ProjectDetails from "./ProjectDetails"; // Import ProjectDetails

// Pagination Button Component
function PaginationButton({ direction, onClick, disabled }) {
  return (
    <button
      className={`pagination ${direction}`}
      onClick={onClick}
      disabled={disabled}
    >
      {direction === "left" ? "<<" : ">>"}
    </button>
  );
}

// Main Project Component
export default function Project() {
  const sections = ProjectDetails.map((section) => section.section); // Section names
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide index
  const [startX, setStartX] = useState(0); // Starting touch position
  const [translateX, setTranslateX] = useState(0); // For temporary swipe position
  const [isSwiping, setIsSwiping] = useState(false); // Control transition

  // Touch Handlers
  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (event) => {
    const currentX = event.touches[0].clientX;
    setTranslateX(currentX - startX);
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

  const handleNavigate = (newIndex) => {
    if (newIndex >= 0 && newIndex < sections.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="container-fluid projectMain-2336" id="projects">
      <h4>Project Showcase</h4>
      <div className="main-2336">
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
              <div key={index} className="slideList-2336">
                <PaginationButton
                  direction="left"
                  onClick={() => handleNavigate(currentIndex - 1)}
                  disabled={currentIndex === 0}
                />
                <h6>{section.section}</h6>
                <PaginationButton
                  direction="right"
                  onClick={() => handleNavigate(currentIndex + 1)}
                  disabled={currentIndex === sections.length - 1}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Projects for the Current Section */}
        <div className="projects_2336">
          {ProjectDetails[currentIndex].projects.map((project, index) => (
            <div key={index} className="projectItem_2336">
              <div className="projectImage_2336">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={project.image} alt={project.projectName} />
                </a>
              </div>
              <div className="projectDetails_2336">
                <h5 className="card-title">{project.projectName}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make
                  up.
                </p>
                <p className="card-text">
                  {project.tools &&
                    Array.isArray(project.tools) &&
                    project.tools
                      .filter((tool) => tool.trim() !== "")
                      .map((tool, toolIndex) => (
                        <span key={toolIndex} style={{ marginRight: "8px" }}>
                          <i className="fa-duotone fa-solid fa-circle-check fa-lg"></i>
                          {tool}
                        </span>
                      ))}
                </p>
                <div className="cart-body">
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

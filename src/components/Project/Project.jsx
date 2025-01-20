import { useState } from "react";
import ProjectDetails from "./ProjectDetails"; // Import ProjectDetails

// Main Project Component
export default function Project() {
  const sections = ProjectDetails.map((section) => section.section); // Section names
  const [currentIndex, setCurrentIndex] = useState(0); // track the state
  return (
    <div className="container-fluid projectMain-2336" id="projects">
      <h4>Project Showcase</h4>
      <div className="main-2336">
        <div className="showCase_2336">
          {sections.map((section, index) => (
            <div key={index} className="slideList-2336">
              <button
                key={index}
                className={`slideButton-2336 ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                {section}
              </button>
            </div>
          ))}
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

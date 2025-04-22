import { useState, useEffect } from "react";
import ProjectDetails from "./ProjectDetails"; // Import ProjectDetails

// Main Project Component
export default function Project() {
  const sections = ProjectDetails.map((section) => section.section); // Section names
  const [currentIndex, setCurrentIndex] = useState(0); // track the state
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle tab change with animation
  const handleTabChange = (index) => {
    if (index !== currentIndex && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);

      // Reset animation state after animation completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  // Animate projects on mount
  useEffect(() => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, []);

  return (
    <section
      className="projectMain-2336"
      id="projects"
      aria-labelledby="project-title"
    >
      <div className="project-container">
        <h2 id="project-title" className="section-title">
          Project
        </h2>
        <div className="main-2336">
          <div className="showCase_2336" role="tablist">
            {sections.map((section, index) => (
              <div key={index} className="slideList-2336">
                <button
                  key={index}
                  className={`slideButton-2336 ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => handleTabChange(index)}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-controls={`panel-${index}`}
                  id={`tab-${index}`}
                >
                  {section}
                </button>
              </div>
            ))}
          </div>

          {/* Dynamic Projects for the Current Section */}
          <div
            className={`projects_2336 ${isAnimating ? "fade-transition" : ""}`}
            role="tabpanel"
            id={`panel-${currentIndex}`}
            aria-labelledby={`tab-${currentIndex}`}
          >
            {ProjectDetails[currentIndex].projects.map((project, index) => (
              <article key={index} className="projectItem_2336">
                <div className="projectImage_2336">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.projectName} project`}
                  >
                    <img
                      src={project.image}
                      alt={project.projectName}
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="projectDetails_2336">
                  <h3 className="project-title">{project.projectName}</h3>
                  <p className="project-description">
                    {project.description ||
                      "A showcase project demonstrating skills and capabilities in modern web development."}
                  </p>
                  <div className="project-tools">
                    {project.tools &&
                      Array.isArray(project.tools) &&
                      project.tools
                        .filter((tool) => tool.trim() !== "")
                        .map((tool, toolIndex) => (
                          <span key={toolIndex} className="tool-item">
                            <i
                              className="fa-solid fa-check"
                              aria-hidden="true"
                            ></i>
                            {tool}
                          </span>
                        ))}
                  </div>
                  <div className="project-links">
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        className="project-link project-link-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View code for ${project.projectName}`}
                      >
                        <i
                          className="fa-brands fa-github"
                          aria-hidden="true"
                        ></i>
                        Code
                      </a>
                    )}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        className="project-link project-link-filled"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.projectName}`}
                      >
                        <i
                          className="fa-solid fa-arrow-up-right-from-square"
                          aria-hidden="true"
                        ></i>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

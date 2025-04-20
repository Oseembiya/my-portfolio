import { useState } from "react";
import ProjectDetails from "./ProjectDetails"; // Import ProjectDetails

// Main Project Component
export default function Project() {
  const sections = ProjectDetails.map((section) => section.section); // Section names
  const [currentIndex, setCurrentIndex] = useState(0); // track the state
  return (
    <section
      className="projectMain-2336"
      id="projects"
      aria-labelledby="project-title"
    >
      <div className="project-container">
        <h2 id="project-title" className="section-title">
          Project Showcase
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
                  onClick={() => setCurrentIndex(index)}
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
            className="projects_2336"
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
                    Some quick example text to build on the card title and make
                    up.
                  </p>
                  <div className="project-tools">
                    {project.tools &&
                      Array.isArray(project.tools) &&
                      project.tools
                        .filter((tool) => tool.trim() !== "")
                        .map((tool, toolIndex) => (
                          <span key={toolIndex} className="tool-item">
                            <i
                              className="fa-solid fa-circle-check"
                              aria-hidden="true"
                            ></i>
                            {tool}
                          </span>
                        ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.codeLink || "#"}
                      className="project-link project-link-outline"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View code for ${project.projectName}`}
                    >
                      <i className="fa-brands fa-github" aria-hidden="true"></i>{" "}
                      Code
                    </a>
                    <a
                      href={project.demoLink || "#"}
                      className="project-link project-link-filled"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.projectName}`}
                    >
                      <i
                        className="fa-solid fa-external-link"
                        aria-hidden="true"
                      ></i>{" "}
                      Live Demo
                    </a>
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

import { useState, useEffect, useRef, useMemo } from "react";
import ProjectDetails from "./ProjectDetails"; // Import ProjectDetails

// Main Project Component
export default function Project() {
  const sections = ProjectDetails.map((section) => section.section); // Section names
  const [currentIndex, setCurrentIndex] = useState(0); // track the state
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Create refs first
  const titleRef = useRef(null);
  const tabsRef = useRef(null);
  const projectsRef = useRef(null);

  // References for Intersection Observer with useMemo
  const sectionRefs = useMemo(
    () => ({
      title: titleRef,
      tabs: tabsRef,
      projects: projectsRef,
    }),
    []
  );

  // Check if mobile view
  const isMobile = windowWidth <= 425;

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

  // Set up intersection observer for scroll animations
  useEffect(() => {
    // Track window resize for responsive adjustments
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    const observerOptions = {
      root: null, // use the viewport
      rootMargin: "0px",
      threshold: 0.15, // 15% of the element needs to be visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.dataset.section]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observe all section refs
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Cleanup resize listener
      window.removeEventListener("resize", handleResize);

      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  // Animate projects on mount
  useEffect(() => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, []);

  return (
    <section className="projectMain-2336" id="projects" aria-label="Projects">
      <div className="project-container">
        <h2
          id="project-title"
          className={`section-title fade-in-section ${
            visibleSections.title ? "is-visible" : ""
          }`}
          ref={sectionRefs.title}
          data-section="title"
        >
          Projects
        </h2>
        <div className="main-2336">
          <div
            className={`showCase_2336 slide-in-left ${
              visibleSections.tabs ? "is-visible" : ""
            }`}
            role="tablist"
            ref={sectionRefs.tabs}
            data-section="tabs"
          >
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
            className={`projects_2336 scale-in ${
              visibleSections.projects ? "is-visible" : ""
            } ${isAnimating ? "fade-transition" : ""}`}
            role="tabpanel"
            id={`panel-${currentIndex}`}
            aria-labelledby={`tab-${currentIndex}`}
            ref={sectionRefs.projects}
            data-section="projects"
          >
            {ProjectDetails[currentIndex].projects.map((project, index) => (
              <article
                key={index}
                className={`projectItem_2336 animation-delay-${index + 1}`}
              >
                <img
                  src={project.image}
                  alt={project.projectName}
                  loading="lazy"
                  width="100%"
                  height="auto"
                />
                <div className="projectDetails_2336">
                  <h3 className="project-title">{project.projectName}</h3>
                  <p className="project-description">
                    {isMobile && project.description?.length > 100
                      ? `${project.description.substring(0, 100)}...`
                      : project.description ||
                        "A showcase project demonstrating skills and capabilities in modern web development."}
                  </p>
                  <div className="project-tools">
                    {project.tools &&
                      Array.isArray(project.tools) &&
                      project.tools
                        .filter((tool) => tool.trim() !== "")
                        .slice(0, isMobile ? 3 : undefined)
                        .map((tool, toolIndex) => (
                          <span key={toolIndex} className="tool-item">
                            <i
                              className="fa-solid fa-check"
                              aria-hidden="true"
                            ></i>
                            {tool}
                          </span>
                        ))}
                    {isMobile && project.tools && project.tools.length > 3 && (
                      <span className="tool-item">
                        <i
                          className="fa-solid fa-ellipsis"
                          aria-hidden="true"
                        ></i>
                        +{project.tools.length - 3}
                      </span>
                    )}
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

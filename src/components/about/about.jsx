import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import AboutMeData from "./aboutMeData";
import image from "/src/assets/osee.jpeg";

// Category button component
const CategoryButton = ({ label, isActive, onClick }) => (
  <button
    className={`category-btn ${isActive ? "active" : ""}`}
    onClick={onClick}
  >
    {label}
  </button>
);

CategoryButton.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Detail card component
const DetailCard = ({ year, course }) => (
  <div className="about-card">
    <h4>{year}</h4>
    <p className="about-card-subtitle">{course}</p>
  </div>
);

DetailCard.propTypes = {
  year: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
};

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // References to sections for Intersection Observer
  const sectionRefs = {
    intro: useRef(null),
    categories: useRef(null),
    details: useRef(null),
    skills: useRef(null),
    image: useRef(null),
  };

  // Get current category data
  const currentCategory = AboutMeData[selectedCategory];

  // Check if mobile view
  const isMobile = windowWidth <= 425;

  // Set up intersection observer for scroll animations and window resize listener
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
  }, []);

  return (
    <section className="about-wrapper about-2335" id="about">
      <div className="aboutMeContent-2335">
        <div>
          <div
            className={`aboutImg-2335 fade-in-section ${
              visibleSections.intro ? "is-visible" : ""
            }`}
            ref={sectionRefs.intro}
            data-section="intro"
          >
            <h2>Who I am</h2>
            <p>
              {isMobile
                ? "As a Computer Science graduate, I blend technical knowledge with creative problem-solving to craft engaging web experiences."
                : "As a Computer Science graduate, I blend technical knowledge with creative problem-solving to craft engaging web experiences. My journey through various projects has honed my skills in both front-end interfaces and back-end architecture, focusing on solutions that are both functional and delightful."}
            </p>
            {!isMobile && (
              <p>
                I thrive in collaborative environments where I can apply modern
                frameworks while expanding my technical horizons. My approach
                combines analytical thinking with attention to detail, ensuring
                projects are optimized for performance and user satisfaction.
              </p>
            )}

            {/* Category selection */}
            <div
              className={`contentList-2335 slide-in-left ${
                visibleSections.categories ? "is-visible" : ""
              }`}
              ref={sectionRefs.categories}
              data-section="categories"
            >
              {AboutMeData.map((category, index) => (
                <CategoryButton
                  key={`category-${index}`}
                  label={category.aboutMe}
                  isActive={selectedCategory === index}
                  onClick={() => setSelectedCategory(index)}
                />
              ))}
            </div>
          </div>

          <div
            className={`img-square-container slide-in-right ${
              visibleSections.image ? "is-visible" : ""
            }`}
            ref={sectionRefs.image}
            data-section="image"
          >
            <div className="profile-image">
              <img src={image} alt="Osee Mbiya - Developer" />
            </div>
          </div>
        </div>

        {/* Category details with animation */}
        <div
          className={`content-2335 scale-in ${
            visibleSections.details ? "is-visible" : ""
          }`}
          ref={sectionRefs.details}
          data-section="details"
        >
          {currentCategory.aboutMeDetails.map((detail, index) => (
            <DetailCard
              key={`detail-${index}`}
              year={detail.year}
              course={detail.course}
            />
          ))}
        </div>

        {/* Skills showcase section with animation */}
        <div
          className={`skills-showcase fade-in-section ${
            visibleSections.skills ? "is-visible" : ""
          }`}
          ref={sectionRefs.skills}
          data-section="skills"
        >
          <div className="skills-heading">
            <h3>My Tech Stack</h3>
            <p>Technologies I work with</p>
          </div>
          <div className="skills-logos">
            <div className="skills-logos-container">
              {/* First set of icons */}
              <div className="skill-logo">
                <i className="fa-brands fa-html5"></i>
                <span>HTML</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-css3-alt"></i>
                <span>CSS</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-js"></i>
                <span>JavaScript</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-react"></i>
                <span>React</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-node-js"></i>
                <span>Node.js</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-python"></i>
                <span>Python</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-java"></i>
                <span>Java</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-git-alt"></i>
                <span>Git</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-docker"></i>
                <span>Docker</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-aws"></i>
                <span>AWS</span>
              </div>
              <div className="skill-logo">
                <i className="fa-solid fa-database"></i>
                <span>MongoDB</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-figma"></i>
                <span>Figma</span>
              </div>

              {/* Duplicate set for continuous scrolling effect */}
              <div className="skill-logo">
                <i className="fa-brands fa-html5"></i>
                <span>HTML</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-css3-alt"></i>
                <span>CSS</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-js"></i>
                <span>JavaScript</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-react"></i>
                <span>React</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-node-js"></i>
                <span>Node.js</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-python"></i>
                <span>Python</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-java"></i>
                <span>Java</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-git-alt"></i>
                <span>Git</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-docker"></i>
                <span>Docker</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-aws"></i>
                <span>AWS</span>
              </div>
              <div className="skill-logo">
                <i className="fa-solid fa-database"></i>
                <span>MongoDB</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-figma"></i>
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

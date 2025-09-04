import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import AboutMeData from "./aboutMeData";
import LearnMore from "./learnMore";
import aboutImage from "../../assets/middlesex.png";

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
const DetailCard = ({
  year,
  course,
  institution,
  onLearnMore,
  isEducation,
}) => (
  <div className="about-card">
    {isEducation && (
      <div className="congratulation-icon">
        <i className="fa-solid fa-award"></i>
      </div>
    )}
    <h4>{year}</h4>
    <p className="about-card-subtitle">{course}</p>
    {institution && <p className="about-card-institution">{institution}</p>}
    <div className="card-footer">
      <LearnMore onClick={onLearnMore} />
    </div>
  </div>
);

DetailCard.propTypes = {
  year: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  institution: PropTypes.string,
  onLearnMore: PropTypes.func.isRequired,
  isEducation: PropTypes.bool,
};

// Profile image component
const ProfileImage = ({ windowWidth, visibleSections, imageRef }) => (
  <div
    className={`img-square-container slide-in-right ${
      visibleSections.image ? "is-visible" : ""
    }`}
    ref={imageRef}
    data-section="image"
    style={windowWidth <= 768 ? { width: "100%" } : {}}
  >
    <div className="profile-image">
      <img
        src={aboutImage}
        alt="Osee Mbiya - Developer"
        loading="lazy"
        style={{
          imageRendering: "-webkit-optimize-contrast",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      />
    </div>
  </div>
);

ProfileImage.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  visibleSections: PropTypes.object.isRequired,
  imageRef: PropTypes.object.isRequired,
};

// Skills showcase component
const SkillsShowcase = ({ skillsRef }) => {
  const skills = [
    { icon: "fa-brands fa-html5", name: "HTML", className: "html" },
    { icon: "fa-brands fa-css3-alt", name: "CSS", className: "css" },
    { icon: "fa-brands fa-js", name: "JavaScript", className: "javascript" },
    { icon: "fa-brands fa-react", name: "React", className: "react" },
    { icon: "fa-brands fa-node-js", name: "Node.js", className: "node" },
    { icon: "fa-brands fa-python", name: "Python", className: "python" },
    { icon: "fa-brands fa-java", name: "Java", className: "java" },
    { icon: "fa-brands fa-git-alt", name: "Git", className: "git" },
    { icon: "fa-brands fa-docker", name: "Docker", className: "docker" },
    { icon: "fa-brands fa-aws", name: "AWS", className: "aws" },
    { icon: "fa-solid fa-database", name: "MongoDB", className: "mongodb" },
    { icon: "fa-brands fa-figma", name: "Figma", className: "figma" },
  ];

  return (
    <div className="skills-showcase" ref={skillsRef} data-section="skills">
      <div className="skills-heading">
        <h3>My Tech Stack</h3>
        <p>Technologies I work with</p>
      </div>
      <div className="skills-logos">
        <div className="skills-logos-container">
          {/* First set of icons */}
          {skills.map((skill) => (
            <div
              key={skill.className}
              className={`skill-logo ${skill.className}`}
            >
              <i className={skill.icon}></i>
              <span>{skill.name}</span>
            </div>
          ))}

          {/* Duplicate set for continuous scrolling effect */}
          {skills.map((skill) => (
            <div
              key={`${skill.className}-duplicate`}
              className={`skill-logo ${skill.className}`}
            >
              <i className={skill.icon}></i>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SkillsShowcase.propTypes = {
  skillsRef: PropTypes.object.isRequired,
};

// Modal component
const Modal = ({ isOpen, content, onClose, modalRef }) => {
  if (!isOpen || !content) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" ref={modalRef}>
        <button className="modal-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h3>{content.year}</h3>
        <h4>{content.course}</h4>
        <p>{content.description || "No additional details available."}</p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  content: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  modalRef: PropTypes.object.isRequired,
};

// Custom hooks
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

const useIntersectionObserver = (sectionRefs) => {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    // If on mobile or tablet, make all sections visible immediately
    if (window.innerWidth <= 768) {
      setVisibleSections({
        intro: true,
        categories: true,
        details: true,
        skills: true,
        image: true,
      });
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
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

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  return visibleSections;
};

// Main About component
export default function About() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Custom hooks
  const windowWidth = useWindowWidth();

  // Create refs
  const introRef = useRef(null);
  const categoriesRef = useRef(null);
  const detailsRef = useRef(null);
  const skillsRef = useRef(null);
  const imageRef = useRef(null);
  const modalRef = useRef(null);

  // References to sections for Intersection Observer
  const sectionRefs = useMemo(
    () => ({
      intro: introRef,
      categories: categoriesRef,
      details: detailsRef,
      skills: skillsRef,
      image: imageRef,
    }),
    []
  );

  const visibleSections = useIntersectionObserver(sectionRefs);

  // Get current category data
  const currentCategory = AboutMeData[selectedCategory];
  const isMobile = windowWidth <= 425;

  // Modal handlers
  const handleLearnMore = (detail) => {
    setModalContent(detail);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setModalContent(null);
    document.body.style.overflow = "auto";
  }, []);

  const handleModalClose = useCallback(
    (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    },
    [closeModal]
  );

  // Modal click outside listener
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleModalClose);
    }
    return () => {
      document.removeEventListener("mousedown", handleModalClose);
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, handleModalClose]);

  return (
    <section className="about-wrapper about-2335" id="about">
      <div className="aboutMeContent-2335">
        <div>
          <div
            className={`aboutImg-2335 fade-in-section ${
              visibleSections.intro ? "is-visible" : ""
            }`}
            ref={introRef}
            data-section="intro"
          >
            <h2>Who I am</h2>

            {/* Image container for mobile/tablet view (≤ 768px) */}
            {windowWidth <= 768 && (
              <ProfileImage
                windowWidth={windowWidth}
                visibleSections={visibleSections}
                imageRef={imageRef}
              />
            )}

            <p>
              I am a Computer Science graduate and full-stack developer with
              experience in both front-end interfaces and back-end architecture,
              dedicated to delivering web solutions that balance functionality
              with great user experiences.
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
              ref={categoriesRef}
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

          {/* Image container for desktop view (> 768px) */}
          {windowWidth > 768 && (
            <ProfileImage
              windowWidth={windowWidth}
              visibleSections={visibleSections}
              imageRef={imageRef}
            />
          )}
        </div>

        {/* Category details with animation */}
        <div
          className={`content-2335 scale-in ${
            visibleSections.details ? "is-visible" : ""
          }`}
          ref={detailsRef}
          data-section="details"
        >
          {currentCategory.aboutMeDetails.map((detail, index) => (
            <DetailCard
              key={`detail-${index}`}
              year={detail.year}
              course={detail.course}
              institution={detail.institution}
              onLearnMore={() => handleLearnMore(detail)}
              isEducation={selectedCategory === 0}
            />
          ))}
        </div>

        {/* Skills showcase section with animation */}
        <SkillsShowcase skillsRef={skillsRef} />

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          content={modalContent}
          onClose={closeModal}
          modalRef={modalRef}
        />
      </div>
    </section>
  );
}

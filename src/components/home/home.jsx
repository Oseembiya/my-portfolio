import { useEffect, useRef, useState } from "react";
import Image from "/src/assets/ProfileHero.png";

function Home() {
  const [visibleSections, setVisibleSections] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const homeRef = useRef(null);

  const MOBILE_BREAKPOINT = 768;
  const MEDIUM_BREAKPOINT = 992;
  const ANIMATION_DELAY = 300;

  // Handle CV download without page reload
  const handleCvDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1X8rXQxPE-OAeEVwYY9q6N5xshZVy2w04";
    link.download = "OseeMbiyaCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // References for sections with Intersection Observer
  const sectionRefs = {
    title: useRef(null),
    subtitle: useRef(null),
    description1: useRef(null),
    description2: useRef(null),
    actions: useRef(null),
    image: useRef(null),
  };

  useEffect(() => {
    // Track window resize for responsive adjustments
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Set initial animation when component mounts
    setTimeout(() => {
      setVisibleSections({
        title: true,
        subtitle: true,
        description1: true,
        description2: true,
        actions: true,
        image: true,
      });
    }, ANIMATION_DELAY);

    // Add scroll animation effect
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
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
      // Cleanup event listeners
      window.removeEventListener("resize", handleResize);

      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  // Adjust text display for different screen sizes
  const isMobile = windowWidth <= MOBILE_BREAKPOINT;
  const isMediumOrLarger = windowWidth >= MEDIUM_BREAKPOINT;

  const getResponsiveDescription = () => {
    if (isMediumOrLarger) {
      return "I bridge front-end aesthetics with back-end functionality to build comprehensive web solutions. My goal is to develop scalable applications that solve real-world problems through innovative technologies and thoughtful architecture.";
    }
    return "I bridge front-end aesthetics with back-end functionality to build comprehensive web solutions.";
  };

  return (
    <section
      className="hero-section"
      id="home"
      aria-label="Introduction"
      ref={homeRef}
    >
      <div className="hero-content">
        <article className="hero-text">
          <header>
            <h1
              className={`fade-in-section ${
                visibleSections.title ? "is-visible" : ""
              }`}
              ref={sectionRefs.title}
              data-section="title"
            >
              <span className="accent-text">Osee</span> Mbiya
            </h1>
            <h2
              className={`fade-in-section animation-delay-1 ${
                visibleSections.subtitle ? "is-visible" : ""
              }`}
              ref={sectionRefs.subtitle}
              data-section="subtitle"
            >
              Full-Stack <span className="accent-text">Developer</span>
            </h2>
          </header>

          <p
            className={`fade-in-section animation-delay-2 ${
              visibleSections.description1 ? "is-visible" : ""
            }`}
            ref={sectionRefs.description1}
            data-section="description1"
          >
            {getResponsiveDescription()}
          </p>

          {!isMobile && (
            <p
              className={`fade-in-section animation-delay-3 ${
                visibleSections.description2 ? "is-visible" : ""
              }`}
              ref={sectionRefs.description2}
              data-section="description2"
            >
              Ready to take your project to the next level? Let&apos;s work
              together to create something extraordinary.
            </p>
          )}

          <div
            className={`hero-actions fade-in-section animation-delay-4 ${
              visibleSections.actions ? "is-visible" : ""
            }`}
            role="group"
            aria-label="Profile actions"
            ref={sectionRefs.actions}
            data-section="actions"
          >
            <a
              href="https://drive.google.com/uc?export=download&id=162lNCCTtt7sestas4gtt6Z3ot3y-2MLR"
              download="Osee_Mbiya_CV.pdf"
              className="action-button primary-button"
              aria-label="Download CV"
              onClick={handleCvDownload}
            >
              <i className="fa-solid fa-download" aria-hidden="true"></i>
              <span className="button-text">Download CV</span>
            </a>
            <div className="social-links" aria-label="Social media links">
              <a
                href="https://github.com/Oseembiya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="social-link"
              >
                <i className="fa-brands fa-github" aria-hidden="true"></i>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/oseembiya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="social-link"
              >
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </article>

        <div
          className={`hero-image slide-in-right ${
            visibleSections.image ? "is-visible" : ""
          }`}
        >
          <img
            ref={sectionRefs.image}
            data-section="image"
            src={Image}
            alt="Osee Mbiya - Full Stack Developer"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;

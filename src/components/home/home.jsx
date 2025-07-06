import { useEffect, useRef, useState, useMemo } from "react";
import heroImage from "../../assets/heroImage.jpg";

function Home() {
  const [visibleSections, setVisibleSections] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const homeRef = useRef(null);

  // Create refs for animation sections
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const description1Ref = useRef(null);
  const description2Ref = useRef(null);
  const actionsRef = useRef(null);
  const imageRef = useRef(null);

  // Handle CV view
  const handleCvView = (e) => {
    e.preventDefault();
    window.open(
      "https://drive.google.com/file/d/11aNvcXUivUmiw1XfjZjHlgqqEsOXb_Ty/view?usp=drive_link",
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Section refs for intersection observer
  const sectionRefs = useMemo(
    () => ({
      title: titleRef,
      subtitle: subtitleRef,
      description1: description1Ref,
      description2: description2Ref,
      actions: actionsRef,
      image: imageRef,
    }),
    []
  );

  // Check if device is mobile - match CSS breakpoint
  const isMobile = windowWidth <= 425; // Changed from 768 to 425

  useEffect(() => {
    // Track window resize for responsive adjustments
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Initial animation trigger
    const timer = setTimeout(() => {
      setVisibleSections({
        title: true,
        subtitle: true,
        description1: true,
        description2: true,
        actions: true,
        image: true,
      });
    }, 500);

    // Intersection Observer for scroll animations
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
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

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
              Front-End <span className="accent-text">Developer</span>
            </h2>
          </header>

          <p
            className={`fade-in-section animation-delay-2 ${
              visibleSections.description1 ? "is-visible" : ""
            }`}
            ref={sectionRefs.description1}
            data-section="description1"
          >
            I build responsive, user-focused websites using React, JavaScript,
            HTML, and CSS. I also have experience with Node.js and MongoDB for
            full-stack development.
          </p>

          <p
            className={`fade-in-section animation-delay-3 ${
              visibleSections.description2 ? "is-visible" : ""
            }`}
            ref={sectionRefs.description2}
            data-section="description2"
          >
            My goal is to grow as a developer by solving real-world problems
            through clean code and continuous learning. I&apos;m actively
            looking for a developer role where I can contribute to a
            collaborative team.
          </p>

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
              href="https://drive.google.com/file/d/11aNvcXUivUmiw1XfjZjHlgqqEsOXb_Ty/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="action-button primary-button"
              aria-label="Download my CV (PDF)"
              onClick={handleCvView}
            >
              <i className="fa-solid fa-download" aria-hidden="true"></i>
              <span className="button-text">Download my CV</span>
            </a>
            <div className="social-links" aria-label="Social media links">
              <a
                href="https://github.com/Oseembiya"
                target="_blank"
                rel="noopener noreferer"
                aria-label="GitHub Profile"
                className="social-link"
              >
                <i className="fa-brands fa-github" aria-hidden="true"></i>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/oseembiya"
                target="_blank"
                rel="noopener noreferer"
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
            alt="Osee Mbiya - Frontend Developer"
            loading="eager"
            src={heroImage}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "/src/assets/ProfileHero.png";

function Home() {
  const [visibleSections, setVisibleSections] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const homeRef = useRef(null);

  const MOBILE_BREAKPOINT = 768;
  const MEDIUM_BREAKPOINT = 992;
  const ANIMATION_DELAY = 500; // Slower initial animation delay

  // Create refs outside
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const description1Ref = useRef(null);
  const description2Ref = useRef(null);
  const actionsRef = useRef(null);
  const imageRef = useRef(null);

  // Handle CV view without page reload - changed from download to view
  const handleCvView = (e) => {
    e.preventDefault();
    // Open CV in new tab for viewing instead of downloading
    window.open(
      "https://drive.google.com/file/d/1cXGHIpb1O8Ms2EMlFa-tn63HIyY-g4bo/view?usp=drive_link",
      "_blank",
      "noopener,noreferrer"
    );
  };

  // References for sections with Intersection Observer
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

  // Adjust text display for different screen sizes
  const isMobile = windowWidth <= MOBILE_BREAKPOINT;
  const isMediumOrLarger = windowWidth >= MEDIUM_BREAKPOINT;

  const getResponsiveDescription = () => {
    if (isMediumOrLarger) {
      return "I bridge front-end aesthetics with back-end functionality to build comprehensive web solutions. My goal is to develop scalable applications that solve real-world problems through innovative technologies and thoughtful architecture.";
    }
    return "I bridge front-end aesthetics with back-end functionality to build comprehensive web solutions.";
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

    // Add mobile touch interactions
    if (isMobile) {
      const handleTouchStart = (e) => {
        // Add subtle touch feedback
        e.currentTarget.style.transform = "scale(0.98)";
        e.currentTarget.style.transition = "transform 0.1s ease-out";
      };

      const handleTouchEnd = (e) => {
        // Return to normal state
        e.currentTarget.style.transform = "scale(1)";
      };

      // Apply to interactive elements
      const interactiveElements = document.querySelectorAll(
        ".action-button, .social-link"
      );
      interactiveElements.forEach((element) => {
        element.addEventListener("touchstart", handleTouchStart, {
          passive: true,
        });
        element.addEventListener("touchend", handleTouchEnd, { passive: true });
        element.addEventListener("touchcancel", handleTouchEnd, {
          passive: true,
        });
      });

      return () => {
        // Cleanup event listeners
        window.removeEventListener("resize", handleResize);

        Object.values(sectionRefs).forEach((ref) => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        });

        // Cleanup touch listeners
        interactiveElements.forEach((element) => {
          element.removeEventListener("touchstart", handleTouchStart);
          element.removeEventListener("touchend", handleTouchEnd);
          element.removeEventListener("touchcancel", handleTouchEnd);
        });
      };
    }

    return () => {
      // Cleanup event listeners
      window.removeEventListener("resize", handleResize);

      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs, isMobile]);

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
              href="https://drive.google.com/file/d/162lNCCTtt7sestas4gtt6Z3ot3y-2MLR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="action-button primary-button"
              aria-label="View CV"
              onClick={handleCvView}
            >
              <i className="fa-solid fa-eye" aria-hidden="true"></i>
              <span className="button-text">View CV</span>
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

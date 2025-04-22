import { useEffect, useRef, useState } from "react";
import Image from "/src/assets/ProfileHero.png";

function Home() {
  const [visibleSections, setVisibleSections] = useState({});
  const homeRef = useRef(null);

  // References to sections for Intersection Observer
  const sectionRefs = {
    title: useRef(null),
    subtitle: useRef(null),
    description1: useRef(null),
    description2: useRef(null),
    actions: useRef(null),
    image: useRef(null),
  };

  useEffect(() => {
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
    }, 300);

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
        } else {
          // Uncomment below if you want elements to animate again when scrolling back up
          // setVisibleSections(prev => ({
          //   ...prev,
          //   [entry.target.dataset.section]: false
          // }));
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
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <section className="hero-section" id="home" ref={homeRef}>
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
              <span>Osee</span> Mbiya
            </h1>
            <h2
              className={`fade-in-section animation-delay-1 ${
                visibleSections.subtitle ? "is-visible" : ""
              }`}
              ref={sectionRefs.subtitle}
              data-section="subtitle"
            >
              Full-Stack <span>Developer</span>
            </h2>
          </header>

          <p
            className={`fade-in-section animation-delay-2 ${
              visibleSections.description1 ? "is-visible" : ""
            }`}
            ref={sectionRefs.description1}
            data-section="description1"
          >
            I specialize in crafting interactive, user-focused web applications
            that are both visually stunning and functionally robust. With a keen
            eye for detail and expertise in modern frameworks.
          </p>
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
          <div
            className={`hero-actions fade-in-section animation-delay-4 ${
              visibleSections.actions ? "is-visible" : ""
            }`}
            role="group"
            aria-label="Profile actions"
            ref={sectionRefs.actions}
            data-section="actions"
          >
            <button className="action-button primary-button">
              Download CV
            </button>
            <div className="social-links">
              <a
                href="https://github.com/Oseembiya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/oseembiya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </article>
        <figure
          className={`hero-image slide-in-right ${
            visibleSections.image ? "is-visible" : ""
          }`}
          ref={sectionRefs.image}
          data-section="image"
        >
          <img
            src={Image}
            alt="Osee Mbiya - Full Stack Developer"
            loading="eager"
          />
        </figure>
      </div>
    </section>
  );
}

export default Home;

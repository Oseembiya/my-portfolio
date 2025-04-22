import { useEffect, useRef, useState } from "react";
import Image from "/src/assets/ProfileHero.png";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const homeRef = useRef(null);

  useEffect(() => {
    // Set initial animation when component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Add scroll animation effect
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Uncomment below if you want elements to animate again when scrolling back up
          // setIsVisible(false);
        }
      });
    }, observerOptions);

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <section className="hero-section" id="home" ref={homeRef}>
      <div className="hero-content">
        <article
          className={`hero-text ${isVisible ? "slide-in-left is-visible" : ""}`}
        >
          <header>
            <h1 className={`${isVisible ? "fade-in-section is-visible" : ""}`}>
              <span>Osee</span> Mbiya
            </h1>
            <h2
              className={`${
                isVisible ? "fade-in-section is-visible animation-delay-1" : ""
              }`}
            >
              Full-Stack <span>Developer</span>
            </h2>
          </header>

          <p
            className={`${
              isVisible ? "fade-in-section is-visible animation-delay-2" : ""
            }`}
          >
            I specialize in crafting interactive, user-focused web applications
            that are both visually stunning and functionally robust. With a keen
            eye for detail and expertise in modern frameworks.
          </p>
          <p
            className={`${
              isVisible ? "fade-in-section is-visible animation-delay-3" : ""
            }`}
          >
            Ready to take your project to the next level? Let&apos;s work
            together to create something extraordinary.
          </p>
          <div
            className={`hero-actions ${
              isVisible ? "fade-in-section is-visible animation-delay-4" : ""
            }`}
            role="group"
            aria-label="Profile actions"
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
          className={`hero-image ${
            isVisible ? "slide-in-right is-visible" : ""
          }`}
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

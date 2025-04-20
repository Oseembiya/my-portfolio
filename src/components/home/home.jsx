import Image from "/src/assets/ProfileHero.png";

function Home() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <article className="hero-text">
          <header>
            <h1>
              <span>Osee</span> Mbiya
            </h1>
            <h2>
              Full-Stack <span>Developer</span>
            </h2>
          </header>

          <p>
            I specialize in crafting interactive, user-focused web applications
            that are both visually stunning and functionally robust. With a keen
            eye for detail and expertise in modern frameworks.
          </p>
          <p>
            Ready to take your project to the next level? Let&apos;s work
            together to create something extraordinary.
          </p>
          <div
            className="hero-actions"
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
        <figure className="hero-image">
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

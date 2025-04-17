import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Image from "/src/assets/ProfileHero.png";
import Button from "./button/Button";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable or enable body scrolling based on menu state
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleContactClick = () => {
    alert("Contact Info functionality to be implemented!");
  };

  const handleDownloadCV = () => {
    const fileId = "1bfeEA8JVhijfKcpoZsr_oP9JZwNLvs4b"; // Extracted File ID
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Create a link element and trigger the download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Osee_Mbiya_CV.pdf"; // Suggested file name
    link.setAttribute("aria-label", "Download CV");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="hero-section" id="home" aria-label="Home section">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="container">
        <section className="hero-content">
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
              I specialize in crafting interactive, user-focused web
              applications that are both visually stunning and functionally
              robust. With a keen eye for detail and expertise in modern
              frameworks.
            </p>
            <p>
              Ready to take your project to the next level? Let's work together
              to create something extraordinary.
            </p>
            <div
              className="hero-actions"
              role="group"
              aria-label="Profile actions"
            >
              <Button
                name="Cv"
                className="btn"
                label="Download CV"
                onClick={handleDownloadCV}
                aria-label="Download CV"
              />
              <Button
                name="Contact"
                className="btn"
                label="Contact Info"
                onClick={handleContactClick}
                aria-label="Contact Information"
              />
            </div>
          </article>
          <figure className="hero-image">
            <img
              src={Image}
              alt="Osee Mbiya - Full Stack Developer"
              loading="eager"
            />
          </figure>
        </section>
      </div>
    </main>
  );
}

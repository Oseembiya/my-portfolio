import { useState, useEffect } from "react";
import Navbar from "../common/navbar";
import Image from "/src/assets/ProfileHero.png";

// eslint-disable-next-line react/prop-types
function Button({ label, name, onClick }) {
  return (
    <button className={`btn btn-${name}`} onClick={onClick} aria-label={label}>
      {label}
    </button>
  );
}

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
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container-fluid hero-section" id="home">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="hero-content">
        <div className="image_2334">
          <img className="photo_2334" src={Image} alt="hero-Image" />
        </div>
        <div className="content-2334">
          <div className="profile_2334">
            <h1>
              <span>Osee</span> Mbiya
            </h1>

            <h2>
              Full-Stack <span>Developer</span>
            </h2>

            <p className="hero-description">
              I specialize in crafting interactive, user-focused web
              applications that are both visually stunning and functionally
              robust. With a keen eye for detail and expertise in modern
              frameworks.
            </p>
            <p className="call-to-action">
              Ready to take your project to the next level? Let’s work together
              to create something extraordinary.
            </p>
          </div>
          <div className="btn_2334">
            <Button label="Download CV" name="Cv" onClick={handleDownloadCV} />
            <Button
              label="Contact Info"
              name="Contact"
              onClick={handleContactClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

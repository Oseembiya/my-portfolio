import { useState, useEffect } from "react";
import Navbar from "../common/navbar"; //
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
    alert("Thanks for taking time viewing My CV");
  };

  return (
    <div className="container-fluid hero-section" id="home">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="sectionControl">
        <div className="image_2334">
          <img className="photo_2334" src={Image} alt="Profile" />
        </div>
        <div className="profile_2334">
          <h1>
            <span>Osee</span> Mbiya
          </h1>
          <h2>
            Front-End <span>Developer</span>
          </h2>
        </div>
        <div className="btn_2334">
          <Button
            label="Contact Info"
            name="Contact"
            onClick={handleContactClick}
          />
          <Button label="Download CV" name="Cv" onClick={handleDownloadCV} />
        </div>
        <div className={`downArrow_2334 ${isMenuOpen ? "hidden" : ""}`}>
          <i className="fa-solid fa-arrow-down"></i>
        </div>
      </div>
    </div>
  );
}

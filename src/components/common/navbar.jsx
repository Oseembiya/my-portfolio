import { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Toggle menu and control body scroll
  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);

    // Disable scrolling on body when menu is open
    if (newMenuState) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Add scrolled class when scrolled down 50px
      setIsScrolled(window.scrollY > 50);

      // Get all sections
      const sections = document.querySelectorAll("section[id]");

      // Default to home if at the very top of the page
      if (scrollPosition < 300) {
        setActiveSection("home");
        return;
      }

      // Check which section is currently in view
      let currentSection = "home"; // Default to home

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    // Run the handler immediately to set initial active state
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("menu-open");
    };
  }, []);

  return (
    <nav
      className={`navbar ${
        isScrolled ? "scrolled" : ""
      } section-${activeSection}`}
    >
      <div className="nav-container">
        <a href="#home" className="logo">
          <span className="highlight">Osee</span> Mbiya
        </a>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  activeSection === link.href.substring(1) ? "active" : ""
                }
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              className="cta-button"
              onClick={() => {
                handleLinkClick();
                document
                  .querySelector("#contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire Me
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile menu to capture taps outside the menu */}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={handleLinkClick}></div>
      )}
    </nav>
  );
}

export default Navbar;

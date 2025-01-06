import { useState, useEffect, useMemo } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu open state
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close the menu explicitly
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Disable or enable body scrolling based on menu state
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Navigation links
  const navLinks = useMemo(
    () => [
      { id: "1", href: "#home", label: "Home" },
      { id: "2", href: "#about", label: "About" },
      { id: "3", href: "#projects", label: "Projects" },
      { id: "4", href: "#contact", label: "Contact" },
    ],
    []
  );

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <span className="ora">Osee</span> Mbiya
        </a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <i className="bi bi-x-lg icon-white"></i>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>
        <div
          className={`navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navLinks.map(({ id, href, label }) => (
              <li className="nav-item ps-lg-3" key={id}>
                <a className="nav-link" href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

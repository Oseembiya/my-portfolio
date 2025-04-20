import { useMemo, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  // Toggle menu open state
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  // Close the menu explicitly
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle ESC key press to close menu
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isMenuOpen, setIsMenuOpen]);

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
    <nav className="main-navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <a className="site-logo" href="#home">
          <span className="ora">Osee</span> Mbiya
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          aria-controls="navbarNav"
        >
          {isMenuOpen ? (
            <i className="fas fa-times" aria-hidden="true"></i>
          ) : (
            <i className="fas fa-bars" aria-hidden="true"></i>
          )}
        </button>

        <div
          className={`navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
          inert={!isMenuOpen ? "" : undefined}
        >
          <ul className="nav-menu" role="menubar">
            {navLinks.map(({ id, href, label }) => (
              <li className="nav-list-item" key={id} role="none">
                <a
                  className="nav-link"
                  href={href}
                  onClick={closeMenu}
                  role="menuitem"
                  tabIndex={isMenuOpen ? "0" : "-1"}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="nav-list-item" role="none">
              <button
                className="hireMe-Btn"
                type="button"
                onClick={closeMenu}
                aria-label="Hire Me"
                tabIndex={isMenuOpen ? "0" : "-1"}
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

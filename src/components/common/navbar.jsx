import { useState, useEffect, useCallback } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact Me" },
  ];

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;

    setIsMenuOpen(newMenuState);
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

  // Debounce function to limit the frequency of function calls
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Memoize the determineActiveSection function with useCallback
  const determineActiveSection = useCallback(() => {
    // Always consider scrolled after 50px
    setIsScrolled(window.scrollY > 50);

    // Get all section elements with IDs
    const sections = Array.from(document.querySelectorAll("section[id]"));

    // If no sections with IDs found, default to home
    if (sections.length === 0) {
      setActiveSection("home");
      return;
    }

    // Get viewport height
    const viewportHeight = window.innerHeight;

    // Initialize variables to track the most visible section
    let maxVisibleSection = null;
    let maxVisiblePercentage = 0;

    sections.forEach((section) => {
      // Get section dimensions and position
      const rect = section.getBoundingClientRect();
      const sectionId = section.id;

      // Skip if section is fully above or below viewport
      if (rect.bottom <= 0 || rect.top >= viewportHeight) {
        return;
      }

      // Calculate visible height
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(viewportHeight, rect.bottom);
      const visibleHeight = visibleBottom - visibleTop;

      // Calculate percentage of section visible in viewport
      const visiblePercentage = (visibleHeight / rect.height) * 100;

      // Update max if this section is more visible
      if (visiblePercentage > maxVisiblePercentage) {
        maxVisiblePercentage = visiblePercentage;
        maxVisibleSection = sectionId;
      }
    });

    // Use most visible section, or default to home
    if (maxVisibleSection) {
      setActiveSection(maxVisibleSection);
    } else {
      // If at the very top (before any sections), set to home
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    }
  }, []);

  // Create optimized scroll handler with requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    const debouncedResize = debounce(determineActiveSection, 100);

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          determineActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Call initially
    determineActiveSection();

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", debouncedResize);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", debouncedResize);
      document.body.classList.remove("menu-open");
    };
  }, [determineActiveSection]);

  return (
    <nav
      className={`navbar ${
        isScrolled ? "scrolled" : ""
      } section-${activeSection}`}
    >
      <div className="nav-container">
        <a href="#home" className="logo">
          OM<span className="fullstops">.</span>
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
            <a
              className="cta-button"
              href="#contact"
              onClick={() => {
                handleLinkClick();
                document
                  .querySelector("#contact")
                  .scrollIntoView({ behavior: "auto" });
              }}
            >
              <i className="fa-solid fa-briefcase"></i> Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import { useState } from "react";

export default function Navbar() {
  const [openBtn, setOpenBtn] = useState(false); // Manage the state for the hamburger button

  // Toggle function to open and close the hamburger button
  const closeBtn = () => {
    setOpenBtn(!openBtn);
  };

  // Function to close the navbar when a link is clicked
  const closeNavbar = () => {
    setOpenBtn(false); // Close the menu when a link is clicked
  };

  const navlinks = [
    { id: "1", href: "#home", label: "Home" },
    { id: "2", href: "#about", label: "About" },
    { id: "3", href: "#projects", label: "Projects" },
    { id: "4", href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <span className="ora">Osee</span> Mbiya
        </a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={closeBtn} // Toggle the hamburger button
          aria-expanded={openBtn ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          {openBtn ? (
            <i className="bi bi-x-lg icon-white"></i>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>
        {/* Rendering the navbar links */}
        <div
          className={`navbar-collapse ${openBtn ? "show" : ""}`} // Apply 'show' class when button is clicked
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navlinks.map((link, id) => (
              <li className="nav-item ps-lg-3" key={id}>
                <a
                  className="nav-link"
                  href={link.href}
                  onClick={closeNavbar} // Close the navbar when a link is clicked
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

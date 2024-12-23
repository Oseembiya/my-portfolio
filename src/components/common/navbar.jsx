import { useState } from "react";

export default function Navbar() {
  const navlinks = [
    { id: "1", href: "#home", label: "Home" },
    { id: "2", href: "#about", label: "About" },
    { id: "3", href: "#projects", label: "Projects" },
    { id: "4", href: "#contact", label: "Contact" },
  ];

  const [openBtn, setCloseBtn] = useState(false);
  const closeBtn = () => {
    setCloseBtn(!openBtn);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#Home">
          <span className="ora">Osee</span> Mbiya
        </a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={closeBtn}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={openBtn ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          {openBtn ? (
            <i className="bi bi-x-lg  icon-white"></i>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>
        {/* rendering each link in li */}
        <div
          className={`collapse navbar-collapse ${openBtn ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {navlinks.map((link, id) => (
              <li className="nav-item ps-lg-3" key={id}>
                <a className="nav-link" href={link.href}>
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

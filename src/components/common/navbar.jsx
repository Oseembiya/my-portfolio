// src/components/Common/Navbar.js
import "./navbar.css";
export default function Navbar() {
  const navlinks = [
    { id: "1", href: "#home", label: "Home" },
    { id: "2", href: "#about", label: "About" },
    { id: "3", href: "#projects", label: "Projects" },
    { id: "4", href: "#experience", label: "Experience" },
    { id: "5", href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#Home">
          Osee Mbiya
        </a>
        <button
          className="navbar-toggler custom-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* rendering each link in li */}
        <div className="collapse navbar-collapse" id="navbarNav">
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

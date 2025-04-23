import { useState, useEffect } from "react";

export default function Contact() {
  const [showArrow, setShowArrow] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const contactSection = document.querySelector(".contactMe-2338");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowArrow(entry.isIntersecting); // Show arrow only when .contactMe-2338 is visible
      },
      {
        root: null, // Observe in the viewport
        threshold: 0.5, // Trigger when at least 50% of the section is visible
      }
    );

    if (contactSection) observer.observe(contactSection);

    return () => {
      if (contactSection) observer.unobserve(contactSection);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle form submission
    setFormSubmitted(true);
    // Reset form after submission
    e.target.reset();
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <footer
      className="contactMe-2338"
      id="contact"
      aria-labelledby="contact-title"
    >
      {/* Section Heading */}
      <div className="contact-container">
        <h2 id="contact-title" className="section-title">
          Contact Me
        </h2>

        <div className="contact-content-wrapper">
          {/* Contact Information */}
          <div className="contactInfo-2338">
            <div className="contactItem-2338">
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              <span>
                Email:{" "}
                <a
                  href="mailto:ozeembiya@gmail.com"
                  aria-label="Send email to ozeembiya@gmail.com"
                >
                  ozeembiya@gmail.com
                </a>
              </span>
            </div>
            <div className="contactItem-2338">
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              <span>
                Phone:{" "}
                <a href="tel:07884103424" aria-label="Call +44788 410 3424">
                  +44788 410 3424
                </a>
              </span>
            </div>
            <div className="socialMedia-2338">
              <a
                href="https://www.linkedin.com/in/osee-mbiya-a96529177"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
              >
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="https://github.com/Oseembiya/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
              >
                <i className="fa-brands fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Twitter profile"
              >
                <i className="fa-brands fa-twitter" aria-hidden="true"></i>
              </a>
            </div>

            {/* Additional Links */}
            <div className="additionalLinks-2338">
              <h3>More Links</h3>
              <ul>
                <li>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download my resume"
                  >
                    <i className="fa-solid fa-file-pdf" aria-hidden="true"></i>
                    <span>Resume</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Instagram profile"
                  >
                    <i
                      className="fa-brands fa-instagram"
                      aria-hidden="true"
                    ></i>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/users/userid"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect on Discord"
                  >
                    <i className="fa-brands fa-discord" aria-hidden="true"></i>
                    <span>Discord</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/447884103424"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect on WhatsApp"
                  >
                    <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                    <span>WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contactContent-2338">
            <p>
              If you&apos;d like to get in touch, please fill out the form
              below:
            </p>

            {formSubmitted && (
              <div className="thankYouMessage" aria-live="polite">
                Thank you for your message! I&apos;ll get back to you soon.
              </div>
            )}

            <form
              className="contactForm-2338"
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >
              {/* Name Field */}
              <div className="formGroup-2338">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  aria-required="true"
                />
              </div>

              {/* Email Field */}
              <div className="formGroup-2338">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  aria-required="true"
                />
              </div>

              {/* Message Field */}
              <div className="formGroup-2338">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="4"
                  required
                  aria-required="true"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submitButton-2338">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Down Arrow */}
        {showArrow && (
          <div className="downArrow-2338">
            <a href="#home" aria-label="Scroll to top">
              <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
            </a>
          </div>
        )}

        <div className="allRight-2338">
          <p>© {new Date().getFullYear()} Osee Mbiya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

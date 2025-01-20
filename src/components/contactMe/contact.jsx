import { useState, useEffect } from "react";

export default function Contact() {
  const [showArrow, setShowArrow] = useState(false);

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

  return (
    <div className="contactMe-2338" id="contact">
      {/* Section Heading */}
      <h4>Contact Me</h4>

      {/* Contact Information */}
      <div className="contactInfo-2338">
        <div className="contactItem-2338">
          <i className="fa-solid fa-envelope"></i>
          <span>
            Email: <a href="mailto:example@example.com">ozeembiya@gmail.com</a>
          </span>
        </div>
        <div className="contactItem-2338">
          <i className="fa-solid fa-phone"></i>
          <span>
            Phone: <a href="tel:07884103424">+44788 410 3424</a>
          </span>
        </div>
        <div className="socialMedia-2338">
          <a
            href="https://www.linkedin.com/in/osee-mbiya-a96529177"
            target="_blank"
            rel="Linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Oseembiya/" target="_blank" rel="Github">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="Twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contactContent-2338">
        <p>If you’d like to get in touch, please fill out the form below:</p>
        <form className="contactForm-2338">
          {/* Name Field */}
          <div className="formGroup-2338">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
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
            />
          </div>

          {/* Message Field */}
          <div className="formGroup-2338">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submitButton-2338">
            Submit
          </button>
        </form>
      </div>

      {/* Down Arrow */}
      {showArrow && (
        <div className="downArrow-2338">
          <a href="#top">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      )}

      <div className="allRight-2338">
        <p>© 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </div>
  );
}

import { useState, useEffect, useRef, useMemo } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [showArrow, setShowArrow] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleSections, setVisibleSections] = useState({});

  // Create refs first
  const titleRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);

  // Then memoize the object that uses them
  const sectionRefs = useMemo(
    () => ({
      title: titleRef,
      info: infoRef,
      form: formRef,
      social: socialRef,
    }),
    []
  );

  // Check if mobile view
  const isMobile = windowWidth <= 425;

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

  // Set up intersection observer for scroll animations
  useEffect(() => {
    // Track window resize for responsive adjustments
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    const observerOptions = {
      root: null, // use the viewport
      rootMargin: "0px",
      threshold: 0.15, // 15% of the element needs to be visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.dataset.section]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observe all section refs
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Cleanup resize listener
      window.removeEventListener("resize", handleResize);

      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      // Using EmailJS to send email notification
      const result = await emailjs.sendForm(
        "Oseembiya",
        "template_mihal6k",
        form.current,
        "qt1jeLIpsn0gJmSAe"
      );

      if (result.text === "OK") {
        // Show success message
        setFormSubmitted(true);
        // Reset form
        e.target.reset();
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage("Failed to send message. try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage("Failed to send message. try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="contactMe-2338" id="contact">
      {/* Section Heading */}
      <div className="contact-container">
        <h2
          id="contact-title"
          className={`section-title fade-in-section ${
            visibleSections.title ? "is-visible" : ""
          }`}
          ref={sectionRefs.title}
          data-section="title"
        >
          Contact Me
        </h2>

        <div className="contact-content-wrapper">
          {/* Contact Information */}
          <div
            className={`contactInfo-2338 slide-in-left ${
              visibleSections.info ? "is-visible" : ""
            }`}
            ref={sectionRefs.info}
            data-section="info"
          >
            <div className="contactContent-2338">
              <h3>
                {isMobile
                  ? "Let's Talk"
                  : "Let's Connect & Create Something Amazing"}
              </h3>
              <p>
                {isMobile
                  ? "I am open to discussions about new opportunities."
                  : "I am always open to discussing new projects, opportunities, or ways to collaborate. Feel free to reach out, I'd love to hear from you!"}
              </p>
              <div className="contact-items">
                <div className="contactItem-2338">
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                  <span>
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
                    <a href="tel:07884103424" aria-label="Call +44788 410 3424">
                      +44788 410 3424
                    </a>
                  </span>
                </div>
                <div className="socialMedia-2338">
                  <a
                    href="https://www.linkedin.com/in/oseembiya"
                    target="_blank"
                    rel="linkedin"
                    aria-label="Visit LinkedIn profile"
                  >
                    <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://github.com/Oseembiya/"
                    target="_blank"
                    rel="github"
                    aria-label="Visit GitHub profile"
                  >
                    <i className="fa-brands fa-github" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="twitter"
                    aria-label="Visit Twitter profile"
                  >
                    <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                  </a>
                </div>
              </div>

              {/* Add signature at the bottom of contactInfo-2338 */}
              <div className="signature-section">
                <div className="signature-content">
                  <p>Best regards,</p>
                  <h4 className="signature-name">O.Mbiya</h4>
                  <p className="signature-title">Full-Stack &</p>
                  <p className="signature-title"> Front-End Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`contactForm-2338 slide-in-right ${
              visibleSections.form ? "is-visible" : ""
            }`}
            ref={sectionRefs.form}
            data-section="form"
          >
            {formSubmitted ? (
              <div className="thankYou-2338">
                <i className="fa-solid fa-check-circle success-icon"></i>
                <h3>Thank You!</h3>
                <p>
                  Your message has been sent successfully. I will get back to
                  you soon!
                </p>
              </div>
            ) : (
              <form
                ref={form}
                className="contactForm-2338"
                onSubmit={handleSubmit}
                aria-label="Contact form"
              >
                {errorMessage && (
                  <div className="errorMessage-2338">
                    <i className="fa-solid fa-exclamation-circle error-icon"></i>
                    <p>{errorMessage}</p>
                  </div>
                )}

                {/* Name Field */}
                <div className="formGroup-2338">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={isMobile ? "Name" : "Your Name"}
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
                    placeholder={isMobile ? "Email" : "Your Email Address"}
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
                    placeholder={
                      isMobile ? "Your message" : "How can I help you?"
                    }
                    rows={isMobile ? 3 : 5}
                    required
                    aria-required="true"
                  ></textarea>
                </div>

                {/* Phone number - hidden for SMS notification */}
                <input type="hidden" name="phone" value="07884103424" />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="submitButton-2338"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="loading">
                      <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                    </span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="allRight-2338">
          <p>© {new Date().getFullYear()} Osee Mbiya. All rights reserved.</p>
        </div>
        {/* Down Arrow */}
        {showArrow && (
          <div className="downArrow-2338">
            <a href="#home" aria-label="Scroll to top">
              <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}

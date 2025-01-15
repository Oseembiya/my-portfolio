import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Submitted:", formData); // Replace with actual submission logic
    setIsSubmitted(true);

    // Reset the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contactMe-2338" id="contact">
      {/* Section Heading */}
      <h4>Contact Me</h4>

      {/* Contact Information */}
      <div className="contactInfo-2338">
        <div className="contactItem-2338">
          <i className="fa-solid fa-envelope"></i>
          <span>
            Email: <a href="mailto:example@example.com">example@example.com</a>
          </span>
        </div>
        <div className="contactItem-2338">
          <i className="fa-solid fa-phone"></i>
          <span>
            Phone: <a href="tel:+1234567890">+123 456 7890</a>
          </span>
        </div>
        <div className="socialMedia-2338">
          <a href="https://www.linkedin.com" target="_blank" rel="linkedin">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="github">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contactContent-2338">
        <p>If you’d like to get in touch, please fill out the form below:</p>
        <form className="contactForm-2338" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="formGroup-2338">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submitButton-2338">
            Submit
          </button>
        </form>

        {/* Submission Feedback */}
        {isSubmitted && (
          <p className="thankYouMessage">
            Thank you! Your message has been sent.
          </p>
        )}
      </div>

      <div className="downArrow-2338">
        <a href="#top">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
}

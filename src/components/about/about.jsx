import { useState } from "react";
import PropTypes from "prop-types";
import AboutMeData from "./aboutMeData";
import image from "/src/assets/osee.jpeg";

// Category button component
const CategoryButton = ({ label, isActive, onClick }) => (
  <button
    className={`category-btn ${isActive ? "active" : ""}`}
    onClick={onClick}
  >
    {label}
  </button>
);

CategoryButton.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Detail card component
const DetailCard = ({ year, course }) => (
  <div className="about-card">
    <h4>{year}</h4>
    <p className="about-card-subtitle">{course}</p>
  </div>
);

DetailCard.propTypes = {
  year: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
};

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  // Get current category data
  const currentCategory = AboutMeData[selectedCategory];

  return (
    <section className="about-wrapper about-2335" id="about">
      <div className="aboutMeContent-2335">
        <div>
          <div className="aboutImg-2335">
            <h2>Who I am</h2>
            <p>
              I am a dedicated and enthusiastic Computer Science graduate from
              Middlesex University with a strong passion for web development. My
              academic and project experience has equipped me with a robust
              skill set in front-end and full-stack development, focusing on
              creating user-friendly, responsive, and efficient web solutions.
              <br />I am eager to secure a front-end developer role where I can
              contribute to innovative projects, collaborate with dynamic teams,
              and further enhance my technical expertise while delivering
              impactful digital experiences.
            </p>

            {/* Category selection */}
            <div className="contentList-2335">
              {AboutMeData.map((category, index) => (
                <CategoryButton
                  key={`category-${index}`}
                  label={category.aboutMe}
                  isActive={selectedCategory === index}
                  onClick={() => setSelectedCategory(index)}
                />
              ))}
            </div>
          </div>
          <img className="img" src={image} alt="Osee Mbiya - Developer" />
        </div>

        {/* Category details */}
        <div className="content-2335">
          {currentCategory.aboutMeDetails.map((detail, index) => (
            <DetailCard
              key={`detail-${index}`}
              year={detail.year}
              course={detail.course}
            />
          ))}
        </div>

        {/* Skills showcase section */}
        <div className="skills-showcase">
          <div className="skills-heading">
            <h3>My Tech Stack</h3>
            <p>Technologies I work with</p>
          </div>
          <div className="skills-logos">
            <div className="skills-logos-container">
              {/* First set of icons */}
              <div className="skill-logo">
                <i className="fa-brands fa-html5"></i>
                <span>HTML</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-css3-alt"></i>
                <span>CSS</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-js"></i>
                <span>JavaScript</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-react"></i>
                <span>React</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-node-js"></i>
                <span>Node.js</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-python"></i>
                <span>Python</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-java"></i>
                <span>Java</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-git-alt"></i>
                <span>Git</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-docker"></i>
                <span>Docker</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-aws"></i>
                <span>AWS</span>
              </div>
              <div className="skill-logo">
                <i className="fa-solid fa-database"></i>
                <span>MongoDB</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-figma"></i>
                <span>Figma</span>
              </div>

              {/* Duplicate set for continuous scrolling effect */}
              <div className="skill-logo">
                <i className="fa-brands fa-html5"></i>
                <span>HTML</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-css3-alt"></i>
                <span>CSS</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-js"></i>
                <span>JavaScript</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-react"></i>
                <span>React</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-node-js"></i>
                <span>Node.js</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-python"></i>
                <span>Python</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-java"></i>
                <span>Java</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-git-alt"></i>
                <span>Git</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-docker"></i>
                <span>Docker</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-aws"></i>
                <span>AWS</span>
              </div>
              <div className="skill-logo">
                <i className="fa-solid fa-database"></i>
                <span>MongoDB</span>
              </div>
              <div className="skill-logo">
                <i className="fa-brands fa-figma"></i>
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

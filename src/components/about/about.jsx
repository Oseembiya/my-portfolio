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

        {/* Companies trust us section */}
        <div className="companies-section">
          <div className="companies-heading">
            <h3>100+ Companies</h3>
            <p>trust us</p>
          </div>
          <div className="companies-logos">
            <div className="logo">
              <img
                src="https://via.placeholder.com/150x50?text=Sitemark"
                alt="Sitemark"
              />
            </div>
            <div className="logo">
              <img
                src="https://via.placeholder.com/150x50?text=Greenish"
                alt="Greenish"
              />
            </div>
            <div className="logo">
              <img
                src="https://via.placeholder.com/150x50?text=LOGOIPSUM"
                alt="Logo Ipsum"
              />
            </div>
            <div className="logo">
              <img
                src="https://via.placeholder.com/150x50?text=LOGOIPSUM"
                alt="Logo Ipsum"
              />
            </div>
            <div className="logo">
              <img
                src="https://via.placeholder.com/150x50?text=PinPoint"
                alt="PinPoint"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

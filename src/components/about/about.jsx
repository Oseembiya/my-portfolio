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
      <h2>Who I am</h2>
      <div className="aboutMeContent-2335">
        <div className="aboutImg-2335">
          <p>
            I am a passionate and dedicated Front-End Developer, ready to tackle
            challenges and create innovative, user-friendly web experiences that
            drive results.
          </p>
          <img className="img" src={image} alt="Osee Mbiya - Developer" />
        </div>

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
      </div>
    </section>
  );
}

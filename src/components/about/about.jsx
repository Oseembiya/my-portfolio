import { useState } from "react";
import AboutMeData from "./aboutMeData";

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="container-fluid about-2335" id="about">
      <h4>Who I am</h4>
      <div className="content-2335">
        {/* Render the details for the selected category */}
        <div className="aboutImg-2335">
          {AboutMeData[selectedCategory].aboutMeDetails.map(
            (detail, detailIndex) => (
              <div key={detailIndex}>
                <p>{detail.intro}</p>
                <p>{detail.grade}</p>
                <img
                  src={detail.image}
                  alt={AboutMeData[selectedCategory].aboutMe}
                />
              </div>
            )
          )}
        </div>

        {/* Render the main "aboutMe" headings */}
        <div className="aboutMe-2335">
          {AboutMeData.map((aboutMe, index) => (
            <button
              className={`category-btn ${
                selectedCategory === index ? "active" : ""
              }`}
              key={index}
              onClick={() => setSelectedCategory(index)} // Set the selected category
            >
              {aboutMe.aboutMe}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

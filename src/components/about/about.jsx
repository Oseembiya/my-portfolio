import { useState } from "react";
import AboutMeData from "./aboutMeData";
import image from "/src/assets/osee.jpeg";

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="container-fluid about-2335" id="about">
      <h4>Who I am</h4>
      <div className="aboutMeContent-2335">
        <div className="aboutImg-2335">
          <p>
            I am a passionate and dedicated Front-End Developer, ready to tackle
            challenges and create innovative, user-friendly web experiences,
            that drive results.
          </p>
          <img className="img" src={image} alt="Working on a laptop" />
        </div>

        {/* Render the main "aboutMe" headings */}
        <div className="contentList-2335 ">
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
        {/* Render the details for the selected category */}
        <div className="content-2335">
          {AboutMeData[selectedCategory].aboutMeDetails.map(
            (detail, detailIndex) => (
              <div key={detailIndex}>
                <p className="year">{detail.year}</p>
                <p>{detail.course}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

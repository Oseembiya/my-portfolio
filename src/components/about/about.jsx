//import { useState } from "react";
import AboutMeData from "./aboutMeData";

export default function About() {
  // const [next, setNext] = useState(false);

  return (
    <div className="container-fluid about-2335" id="about">
      <h4>Who I am</h4>
      <div className="content-2335">
        <div className="aboutMe-2335">
          {AboutMeData.map((aboutMe, index) => (
            <div key={index}>{aboutMe.aboutMe}</div>
          ))}
        </div>
        <div className="aboutImg-2335">
          {AboutMeData[0].aboutMeDetails.map((aboutMeDetails, index) => (
            <div key={index}>
              <p> {aboutMeDetails.aboutMeDetails}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

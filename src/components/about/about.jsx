import AboutMeData from "./aboutMeData";

export default function About() {
  return (
    <div className="container-fluid about-2335" id="about">
      <h4>Who I am</h4>
      <div className="content-2335">
        {/* Render the main "aboutMe" headings */}
        <div className="aboutMe-2335">
          {AboutMeData.map((aboutMe, index) => (
            <button className="button" key={index}>
              {aboutMe.aboutMe}
            </button>
          ))}
        </div>

        {/* Render the "aboutMeDetails" for each "aboutMe" */}
        {/*    <div className="aboutImg-2335">
          {AboutMeData.map((aboutMe, aboutIndex) =>
            aboutMe.aboutMeDetails.map((detail, detailIndex) => (
              <div key={`${aboutIndex}-${detailIndex}`}>
                <p>{detail.intro}</p>
                <p>Grade: {detail.grade}</p>
              </div>
            ))
          )}
        </div> */}
      </div>
    </div>
  );
}

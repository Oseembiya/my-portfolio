import Photo from "/src/assets/osee.jpeg";

export default function About() {
  return (
    <div className="container-fluid about-2335" id="about">
      <h4>Who I am</h4>
      <div className="aboutMe-2335">
        <div className="content-2335">
          <div className="aboutImg_2335">
            <p> </p>
          </div>
        </div>
        <div className="aboutImg-2335">
          <img className="Img-2335" src={Photo} alt="AboutImage" />
        </div>
      </div>
    </div>
  );
}

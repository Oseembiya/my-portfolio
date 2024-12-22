import "./about.css";
import AboutMe from "/src/assets/osee.jpeg";
export default function About() {
  return (
    <div className="container-fluid about_2335">
      <h1>Who I am</h1>
      <img className="aboutImg_2335" src={AboutMe} alt="AboutImage" />
      <div className="content_2335">
        <p>
          <strong>
            <i className="fa fa-house"></i>Base in London
          </strong>
          <br />
          Passionate and dedicated Front-End Developer, ready to tackle
          challenges and create innovative, user-friendly web experiences that
          drive results.
        </p>
      </div>
    </div>
  );
}

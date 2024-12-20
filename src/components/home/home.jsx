import ProfilePhoto from "/src/assets/bussiness.jpeg";
import "./home.css";
import Button from "../common/buttons";

export default function Home() {
  return (
    <div className="container-fluid hero-section">
      <div className="image_2334">
        <img className="photo_2334" src={ProfilePhoto} alt="Profile" />
      </div>
      <div className="profile_2334">
        <h1 className="name">
          <span className="ora">Osee</span> Mbiya
        </h1>
        <h2>
          Front-End <span className="ora">Developer</span>
        </h2>
      </div>
      <div className="btn_2334">
        <Button label="Contact Info" type="primary" onClick={() => {}} />
        <Button label="Download CV" type="secondary" onClick={() => {}} />
      </div>
      <div className="downArrow_2334">
        <i className="fa-solid fa-arrow-down"></i>
      </div>
    </div>
  );
}

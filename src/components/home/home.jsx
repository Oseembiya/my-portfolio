import "./home.css";
import Button from "../common/buttons";
import Navbar from "../common/navbar"; //
import Image from "/src/assets/Professional_photo.png";

export default function Home() {
  return (
    <div className="container-fluid hero-section">
      <Navbar />
      <div className="sectionControl">
        <div className="image_2334">
          <img className="photo_2334" src={Image} alt="Profile" />
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
          <Button label="Contact Info" name="Contact" onClick={() => {}} />
          <Button label="Download CV" name="Cv" onClick={() => {}} />
        </div>
        <div className="downArrow_2334">
          <i className="fa-solid fa-arrow-down"></i>
        </div>
      </div>
    </div>
  );
}

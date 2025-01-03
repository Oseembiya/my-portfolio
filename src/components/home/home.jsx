import Navbar from "../common/navbar"; //
import Image from "/src/assets/Professional_photo.png";

// passing props to parents Home component
// eslint-disable-next-line react/prop-types
function Button({ label, name, onClick }) {
  return (
    <button className={`btn btn-${name}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default function Home() {
  return (
    <div className="container-fluid hero-section">
      <Navbar />
      <div className="sectionControl">
        <div className="image_2334">
          <img className="photo_2334" src={Image} alt="Profile" />
        </div>
        <div className="profile_2334">
          <h1>
            <span>Osee</span> Mbiya
          </h1>
          <h2>
            Front-End <span>Developer</span>
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

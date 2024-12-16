import ProfilePhoto from "../../assets/Professional_photo.png";
import "./home.css";

export default function Home() {
  return (
    <div className="container-fluid hero-section ">
      <div className="image_2334">
        <img className="photo_2334" src={ProfilePhoto} alt="ImageProfile" />
      </div>
      <div className="profile_2334">
        <h1 className="name">
          <span className="ora">Osee</span> Mbiya
        </h1>
        <h2>
          Front-End <span className="ora">Developer </span>
        </h2>
      </div>
      <div className="btn_2334">
        <button className="btn btn-primary">Contact Info</button>
        <button className="btn btn-secondary">Download Cv</button>
      </div>
      <div className="social_link_2334 d-flex flex-direction: row; ">
        <a
          className="me-3 text-white"
          href="https://github.com/Oseembiya/"
          target="_blank"
          rel="opener northerner"
          aria-label="GitHub Profile"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a
          className="text-white"
          href="https://www.linkedin.com/in/oseembiya/"
          target="_blank"
          rel="opener northerner"
          aria-label="LinkedIn Profile"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
      <div className="downArrow_2334">
        <i className="fa-solid fa-arrow-down"></i>
      </div>
    </div>
  );
}

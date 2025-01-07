import Photo from "/src/assets/osee.jpeg";

// eslint-disable-next-line react/prop-types
function Button({ value }) {
  return <button className="about-btn">{value}</button>;
}
export default function About() {
  return (
    <div className="container-fluid about-2335" id="about">
      <h4>Who I am</h4>
      <div className="aboutMe-2335">
        <div className="content-2335">
          <Button value="Eduction" />
          <Button value="Experience " />
          <div className="aboutImg_2335"></div>
        </div>
        <div className="aboutImg-2335">
          <img className="Img-2335" src={Photo} alt="AboutImage" />
        </div>
      </div>
    </div>
  );
}

import profilePic from "../assets/profile-pic.jpg";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h2>About Me</h2>
        <p>
          Hello! I’m Alzhan, an aspiring React developer passionate about
          building engaging user interfaces.
        </p>
        <p>Skills: React, JavaScript, CSS, HTML</p>
        <p>
          I love working on projects that challenge me and help me grow as a
          developer.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

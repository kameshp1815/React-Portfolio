import "./About.css";
import profilePic from "../../assets/kamesh.jpg"; // Update with your actual image

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-wrapper">
        {/* Left Section - Image & Name */}
        <div className="about-image-card">
          <img src={profilePic} alt="Kamesh" className="profile-pic" />
          <h2 className="about-name">KAMESH</h2>
          <p className="about-role">FULL STACK DEVELOPER</p>
        </div>

        {/* Right Section - About Content */}
        <div className="about-content">
          <h2 className="about-title">ABOUT ME</h2>
          <p className="about-text">
            🚀 Passionate about <span>Full Stack Development</span> and building dynamic, high-performance web applications.  
          </p>
          <p className="about-text">
            💡 Love problem-solving, exploring **cutting-edge technologies**, and constantly enhancing my skills.  
          </p>
          <p className="about-text">
            🔥 Excited to work on challenging projects and create impactful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

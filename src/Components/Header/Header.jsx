import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import profilePic from "../../assets/kamesh.jpg";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="profileContainer">
        <img src={profilePic} alt="Kamesh P" className="profilePic" />
        <h1 className="name">KAMESH P</h1>
        <h2 className="tagline">Full-Stack Developer | Problem Solver</h2>
      </div>

      <div className="socialLinks">
        <a href="https://github.com/kameshp1815" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub className="icon github" />
        </a>
        <a href="https://www.linkedin.com/in/kamesh-p-8049082b3/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://leetcode.com/u/kameshkamesh3876/" target="_blank" rel="noopener noreferrer" title="LeetCode">
          <SiLeetcode className="icon leetcode" />
        </a>
        <a href="https://www.codechef.com/users/kamesh08" target="_blank" rel="noopener noreferrer" title="CodeChef">
          <SiCodechef className="icon codechef" />
        </a>
      </div>

      <div className="buttons">
        <a href="/src/assets/resume.pdf" download className="resumeButton"> Resume</a>
        <a href="mailto:kameshkamesh3876@gmail.com" className="contactButton">Contact Me</a>
      </div>
    <br />
      <hr />
    </header>
  );
};

export default Header;

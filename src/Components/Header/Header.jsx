import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodechef,SiLeetcode } from "react-icons/si";
import profilePic from "../../assets/kamesh.jpg";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="profileContainer">
        <img src={profilePic} alt="Kamesh P" className="profilePic" />
        <h1 className="name">KAMESH P</h1>
      </div>
      <div className="socialLinks">
        <a href="https://github.com/kameshp1815" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github" />
        </a>
        <a href="https://www.linkedin.com/in/kamesh-p-8049082b3/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://leetcode.com/u/kameshkamesh3876/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="icon leetcode" />
        </a>
        <a href="https://www.codechef.com/users/kamesh08" target="_blank" rel="noopener noreferrer">
          <SiCodechef className="icon codechef" />
        </a>
      </div>
      <hr />
    </header>
  );
};

export default Header;

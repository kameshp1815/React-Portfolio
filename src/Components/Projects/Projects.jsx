import "./Projects.css";
import { FaGithub } from 'react-icons/fa';
import project1Image from "../../assets/project3.jpg";
import project2Image from "../../assets/project2.jpg";
import project3Image from "../../assets/project3.jpg";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="title">Projects</h2>
      <div className="projectsContainer">
        <div className="projectItem">
          <div className="projectImageContainer">
            <img src={project1Image} alt="Smart Parking System" className="projectImage" />
          </div>
          <div className="projectContent">
            <h3>Smart Parking System</h3>
            <p>Developed an IoT-based Smart Parking System to improve urban parking efficiency using real-time data. Integrated sensors to monitor parking space availability and provide live updates via an LCD display.</p>
            <a href="https://github.com/kameshp1815/Smart-ParkingSystem.git" className="githubLink" target="_blank" rel="noopener noreferrer">
              <FaGithub className="githubIcon" /> View on GitHub
            </a>
          </div>
        </div>
        <div className="projectItem">
          <div className="projectImageContainer">
            <img src={project2Image} alt="Rock-Paper-Scissors" className="projectImage" />
          </div>
          <div className="projectContent">
            <h3>Rock-Paper-Scissors</h3>
            <p>Developed an interactive Rock-Paper-Scissors game using HTML, CSS, and JavaScript, featuring a user-friendly interface and responsive design for an engaging experience.</p>
            <a href="https://github.com/kameshp1815/rock-paper-scissor-game.git" className="githubLink" target="_blank" rel="noopener noreferrer">
              <FaGithub className="githubIcon" /> View on GitHub
            </a>
          </div>
        </div>
        <div className="projectItem">
          <div className="projectImageContainer">
            <img src={project3Image} alt="Agriculture Machinery Rental" className="projectImage" />
          </div>
          <div className="projectContent">
            <h3>Agriculture Machinery Rental</h3>
            <p>Developed a dynamic Agriculture Machinery Rental System using React for the frontend. The system features a Machines page where users can browse available agricultural machinery and book rentals based on the number of days.</p>
            <a href="https://github.com/kameshp1815/Agriculture-Machines-Rental.git" className="githubLink" target="_blank" rel="noopener noreferrer">
              <FaGithub className="githubIcon" /> View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

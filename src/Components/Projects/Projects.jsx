import "./Projects.css";
import { FaGithub } from 'react-icons/fa';
import project1Image from "../../assets/project3.jpg";
import project2Image from "../../assets/project2.jpg";
import project3Image from "../../assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Smart Parking System",
      description: "Developed an IoT-based Smart Parking System to improve urban parking efficiency using real-time data. Integrated sensors to monitor parking space availability and provide live updates via an LCD display.",
      image: project1Image,
      github: "https://github.com/kameshp1815/Smart-ParkingSystem.git"
    },
    {
      title: "Rock-Paper-Scissors",
      description: "Developed an interactive Rock-Paper-Scissors game using HTML, CSS, and JavaScript, featuring a user-friendly interface and responsive design for an engaging experience.",
      image: project2Image,
      github: "https://github.com/kameshp1815/rock-paper-scissor-game.git"
    },
    {
      title: "Agriculture Machinery Rental",
      description: "Developed a dynamic Agriculture Machinery Rental System using React for the frontend. The system features a Machines page where users can browse available agricultural machinery and book rentals based on the number of days.",
      image: project3Image,
      github: "https://github.com/kameshp1815/Agriculture-Machines-Rental.git"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="title">Projects</h2>
      <div className="projectsContainer">
        {projects.map((project, index) => (
          <div className={`projectItem ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="projectImageContainer">
              <img src={project.image} alt={project.title} className="projectImage" />
            </div>
            <div className="projectContent">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.github} className="githubLink" target="_blank" rel="noopener noreferrer">
                <FaGithub className="githubIcon" /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <br/><br/><hr/>
    </section>
  );
};

export default Projects;

import "./Projects.css";
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon from react-icons

const Projects = () => {
  return (
    <section id="projects" className='projects'>
      <h2 className='title'>Projects</h2>
      
      <div className='projectItem'>
        <h3>Smart Parking System</h3>
        <p>
          Developed an IoT-based Smart Parking System to improve urban parking efficiency using real-time data. Integrated sensors to monitor parking space availability and provide live updates via an LCD display.
        </p>
        <a href="https://github.com/yourgithub/SmartParkingSystem" className="githubLink" target="_blank" rel="noopener noreferrer">
          <FaGithub className="githubIcon" /> View on GitHub
        </a>
      </div>
      
      <div className='projectItem'>
        <h3>Rock-Paper-Scissors</h3>
        <p>
          Developed an interactive Rock-Paper-Scissors game using HTML, CSS, and JavaScript, featuring a user-friendly interface and responsive design for an engaging experience.
        </p>
        <a href="https://github.com/yourgithub/RockPaperScissors" className="githubLink" target="_blank" rel="noopener noreferrer">
          <FaGithub className="githubIcon" /> View on GitHub
        </a>
      </div>
      
      <div className='projectItem'>
        <h3>Agriculture Machinery Rental</h3>
        <p>
          Developed a dynamic Agriculture Machinery Rental System using React for the frontend. The system features a Machines page where users can browse available agricultural machinery and book rentals based on the number of days.
        </p>
        <a href="https://github.com/yourgithub/AgricultureMachineryRental" className="githubLink" target="_blank" rel="noopener noreferrer">
          <FaGithub className="githubIcon" /> View on GitHub
        </a>
      </div>
      <br></br>
      <hr></hr>
    </section>
  );
};

export default Projects;

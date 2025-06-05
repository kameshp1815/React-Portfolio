import "./Projects.css";
import { MdLiveTv } from "react-icons/md";
import project1Image from "../../assets/ud.png";
import project2Image from "../../assets/project2.jpg";
import project3Image from "../../assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Event Mangement website - Udhayam",
      description: "Developed the Udhayam Website in collaboration using React to manage event registrations, provide real-time updates, and streamline participant engagement for an intercollege cultural fest. Implemented a user-friendly interface with seamless navigation, ensuring efficient event management and accessibility.",
      image: project1Image,
      github: "https://udhayam-csbs.vercel.app/"
    },
    {
      title: "Agriculture Machinery Rental",
      description: "Developed a dynamic Agriculture Machinery Rental System using React for the frontend. The system features a Machines page where users can browse available agricultural machinery and book rentals based on the number of days.",
      image: project3Image,
      github: "https://agriculture-machines-rental.onrender.com/"
    },
    {
      title: "Rock-Paper-Scissors",
      description: "Developed an interactive Rock-Paper-Scissors game using HTML, CSS, and JavaScript, featuring a user-friendly interface and responsive design for an engaging experience.",
      image: project2Image,
      github: "https://kamesh-rockpaper-scissor-game.netlify.app/"
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
                <MdLiveTv className="githubIcon" /> View Project
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

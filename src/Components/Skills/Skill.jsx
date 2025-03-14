import "./Skills.css";
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaCogs, FaDatabase, FaGithub, FaCodeBranch, FaGitAlt } from 'react-icons/fa';

const Skills = () => {
  const programmingLanguages = [
    { name: "Python", icon: <FaPython />, description: "Experienced in Python programming for data analysis, web development, and automation." },
    { name: "C", icon: <FaCogs />, description: "Experienced in C programming for system-level development and algorithms." },
    { name: "C++", icon: <FaCodeBranch />, description: "Skilled in C++ for object-oriented programming and software development." },
    { name: "Java", icon: <FaJava />, description: "Proficient in Java for object-oriented programming and software development." },
    { name: "SQL", icon: <FaDatabase />, description: "Proficient in SQL for database management and data manipulation." },
  ];

  const technologies = [
    { name: "HTML", icon: <FaHtml5 />, description: "Proficient in creating well-structured web pages using HTML5." },
    { name: "CSS", icon: <FaCss3Alt />, description: "Skilled in styling web pages with CSS3 and responsive design techniques." },
    { name: "JavaScript (JS)", icon: <FaJs />, description: "Experienced in JavaScript for front-end development and interactive web applications." },
    { name: "Object-Oriented Programming (OOP)", icon: <FaCogs />, description: "Proficient in object-oriented programming concepts and design patterns." },
    { name: "Git", icon: <FaGitAlt />, description: "Experienced in version control using Git." },
    { name: "GitHub", icon: <FaGithub />, description: "Skilled in collaborating and sharing code using GitHub." },
  ];

  const relevantCoursework = [
    { name: "DBMS", icon: <FaDatabase />, description: "Knowledgeable in database management systems and their applications." },
    { name: "Data Structures and Algorithms", icon: <FaCogs />, description: "Skilled in data structures and algorithms for efficient problem-solving." },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="title"><span className="underline-attractive">Skills</span></h2>
      
      <div className="category">
        <h3 className="categoryTitle">Programming Languages</h3>
        <div className="iconContainer">
          {programmingLanguages.map((skill, index) => (
            <div key={index} className="skillIconBox">
              <div className="skillIcon">{skill.icon}</div>
              <div className="skillName">{skill.name}</div>
              <div className="skillDescription">{skill.description}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="category">
        <h3 className="categoryTitle">Technologies</h3>
        <div className="iconContainer">
          {technologies.map((skill, index) => (
            <div key={index} className="skillIconBox">
              <div className="skillIcon">{skill.icon}</div>
              <div className="skillName">{skill.name}</div>
              <div className="skillDescription">{skill.description}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="category">
        <h3 className="categoryTitle">Relevant Coursework</h3>
        <div className="iconContainer">
          {relevantCoursework.map((skill, index) => (
            <div key={index} className="skillIconBox">
              <div className="skillIcon">{skill.icon}</div>
              <div className="skillName">{skill.name}</div>
              <div className="skillDescription">{skill.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

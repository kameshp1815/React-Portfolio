import "./Skills.css";
import { FaPython, FaHtml5,FaJava, FaCss3Alt, FaJs, FaCogs, FaDatabase, FaGithub } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className='skills'>
      <h2 className='title'>Skills</h2>
      
      <div className="skillsContainer">
        {/* Programming Languages Section */}
        <div className="skillsGroup">
          <h3 className="skillsGroupTitle">Programming Languages</h3>
          <div className="skillsList">
            <div className="skillItem">
              <FaPython className="skillIcon" />
              <span>Python</span>
            </div>
            <div className="skillItem">
              <FaCogs className="skillIcon" />
              <span>C</span>
            </div>
            <div className="skillItem">
              <FaJava className="skillIcon" />
              <span>Java</span>
            </div>
            <div className="skillItem">
              <FaDatabase className="skillIcon" />
              <span>SQL</span>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="skillsGroup">
          <h3 className="skillsGroupTitle">Technologies</h3>
          <div className="skillsList">
            <div className="skillItem">
              <FaHtml5 className="skillIcon" />
              <span>HTML</span>
            </div>
            <div className="skillItem">
              <FaCss3Alt className="skillIcon" />
              <span>CSS</span>
            </div>
            <div className="skillItem">
              <FaJs className="skillIcon" />
              <span>JavaScript</span>
            </div>
          </div>
        </div>

        {/* Relevant Coursework Section */}
        <div className="skillsGroup">
          <h3 className="skillsGroupTitle">Relevant Coursework</h3>
          <div className="skillsList">
            
            <div className="skillItem">
              <FaGithub className="skillIcon" />
              <span>Data Structures and Algorithms</span>
            </div>
            <div className="skillItem">
              <FaCogs className="skillIcon" />
              <span>Object Oriented Programming</span>
            </div>
            
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
    </section>
  );
};

export default Skills;

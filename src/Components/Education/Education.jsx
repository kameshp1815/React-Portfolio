import "./Education.css";
import { FaSchool, FaUniversity } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="title">Education</h2>
      <div className="educationItem">
        <FaUniversity className="educationItemIcon" />
        <div className="educationItemContent">
          <h3>KIT - Kalaignarkarunanidhi Institute of Technology</h3>
          <p>B.Tech - Computer Science and Business Systems</p>
          <p>2022 – Present | CGPA - 8.02</p>
        </div>
      </div>
      <div className="educationItem">
        <FaSchool className="educationItemIcon" />
        <div className="educationItemContent">
          <h3>Theni Kammavar Sangam Matriculation Higher Secondary School</h3>
          <p>Higher Secondary (HSC)</p>
          <p>2021 – 2022 | Percentage - 72%</p>
        </div>
      </div>
      <div className="educationItem">
        <FaSchool className="educationItemIcon" />
        <div className="educationItemContent">
          <h3>Theni Kammavar Sangam Matriculation Higher Secondary School</h3>
          <p>Secondary School (SSLC)</p>
          <p>2019 – 2020 | Percentage - 80%</p>
        </div>
      </div>
      <br />
      <hr />
    </section>
  );
};

export default Education;

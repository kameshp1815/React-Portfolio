import { useEffect, useState } from "react";
import { SiCoursera } from "react-icons/si";
import { SiInfosys } from "react-icons/si";
import "./Certificates.css";

const Certificates = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 200); // Delay effect for smooth animation
  }, []);

  return (
    <section id="certificates" className={`certificates ${fadeIn ? "fade-in" : ""}`}>
      <h2 className="title">Certificates</h2>
      
      <div className="certificateGrid">
        {/* Infosys Springboard Certifications */}
        <div className="certificateCard">
          <SiInfosys className="certificateIcon infosysIcon" />
          <h3>Infosys Springboard</h3>
          <ul>
            <li>Python Foundation</li>
            <li>TechA Salesforce</li>
            <li>TechA Web Development using HTML & CSS</li>
          </ul>
        </div>

        {/* Coursera Certification */}
        <div className="certificateCard">
          <SiCoursera className="certificateIcon courseraIcon" />
          <h3>Coursera</h3>
          <ul>
            <li>HTML, CSS, and JavaScript for Web Developers</li>
          </ul>
        </div>
      </div>
      <br></br>
      <hr></hr>
    </section>
  );
};

export default Certificates;

import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="title">Education</h2>
      <div className="educationItem">
        <h3>KIT - Kalaignarkarumanidhi Institute of Technology</h3>
        <p>B.Tech - Computer Science and Business Systems</p>
        <p>2022 – Present | CGPA - 8.02</p>
      </div>
      <div className="educationItem">
        <h3>Theni Kammavar Sangam Matriculation Higher Secondary School</h3>
        <p>Higher Secondary (HSC)</p>
        <p>2021 – 2022 | Percentage - 72%</p>
      </div>
      <div className="educationItem">
        <h3>Theni Kammavar Sangam Matriculation Higher Secondary School</h3>
        <p>Secondary School (SSLC)</p>
        <p>2019 – 2020 | Percentage - 80%</p>
      </div>
      <br></br>
      <hr></hr>
    </section>
  );
};

export default Education;

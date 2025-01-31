import { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 200); // Delay effect for smooth animation
  }, []);

  return (
    <section id="contact" className={`contact ${fadeIn ? "fade-in" : ""}`}>
      <h2 className="title">Contact Me</h2>
      <div className="contactCard">
        <div className="contactItem">
          <FaEnvelope className="contactIcon emailIcon" />
          <p>Email: <a href="mailto:kameshkamesh3876@gmail.com">kameshkamesh3876@gmail.com</a></p>
        </div>
        <div className="contactItem">
          <FaPhoneAlt className="contactIcon phoneIcon" />
          <p>Phone: <a href="tel:+9698940523">9698940523</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

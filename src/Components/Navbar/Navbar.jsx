import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li><a href="#header" className="navLink">Home</a></li>
        <li><a href="#about" className="navLink">About</a></li>
        <li><a href="#education" className="navLink">Education</a></li>
        <li><a href="#projects" className="navLink">Projects</a></li>
        <li><a href="#skills" className="navLink">Skills</a></li>
        <li><a href="#certificates" className="navLink">Certificates</a></li>
        <li><a href="#contact" className="navLink">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

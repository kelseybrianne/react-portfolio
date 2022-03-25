import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/kelseybrianne" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/kelseybetteridge/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
      </a>
      <a href="https://www.instagram.com/kelseybriaanne/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="icon" />
      </a>
    </footer>
  );
};

export default Footer;

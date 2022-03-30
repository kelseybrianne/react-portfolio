import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = ({ toggleTheme, theme }) => {
  return (
    <footer>
      <div className="social-link-icons">
        <a href="https://github.com/kelseybrianne" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/kelseybetteridge/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://www.instagram.com/kelseybriaanne/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
      </div>
      <button id="theme-btn" onClick={toggleTheme}>{theme === 'Light' ? 'Light Mode' : 'Dark Mode'}</button>
    </footer>
  );
};

export default Footer;

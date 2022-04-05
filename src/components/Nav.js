// import { Link } from "react-router-dom";

const Nav = ({ setCurrentPage, currentPage }) => {
  return (
    <nav>
      <div id="logo">
        <h2>Kelsey Betteridge</h2>
      </div>
      <div className="navigation">
        <a
          key={1}
          href="#about-me"
          onClick={() => setCurrentPage("about-me")}
          className={currentPage === "About Me" ? "current-page" : ""}
        >
          About Me
        </a>
        {/* {To implement when I change to react router} */}
        {/* <p><Link to={'/about'}>About Me</Link></p> */}
        <a
          href="#portfolio"
          key={2}
          className={currentPage === "portfolio" ? "current-page" : ""}
          onClick={() => setCurrentPage("portfolio")}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          key={3}
          className={currentPage === "contact" ? "current-page" : ""}
          onClick={() => setCurrentPage("contact")}
        >
          Contact
        </a>
        <a 
          href="#resume"
          key={4}
          className={currentPage === "resume" ? "current-page" : ""}
          onClick={() => setCurrentPage("resume")}
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Nav;

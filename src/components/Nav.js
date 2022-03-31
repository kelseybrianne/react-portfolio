const Nav = ({ setCurrentPage, currentPage }) => {
  return (
    <nav>
      <div id="logo">
        <h2>Kelsey Betteridge</h2>
      </div>
      <div className="navigation">
        <p
          key={1}
          onClick={() => setCurrentPage("About Me")}
          className={currentPage === "About Me" ? "current-page" : ""}
        >
          About Me
        </p>
        <p
          key={2}
          className={currentPage === "Portfolio" ? "current-page" : ""}
          onClick={() => setCurrentPage("Portfolio")}
        >
          Portfolio
        </p>
        <p
          key={3}
          className={currentPage === "Contact" ? "current-page" : ""}
          onClick={() => setCurrentPage("Contact")}
        >
          Contact
        </p>
        <p
          key={4}
          className={currentPage === "Resume" ? "current-page" : ""}
          onClick={() => setCurrentPage("Resume")}
        >
          Resume
        </p>
      </div>
    </nav>
  );
};

export default Nav;

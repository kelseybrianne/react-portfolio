import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

const CurrentPage = ({ currentPage }) => {
  switch (currentPage) {
    case "about-me":
      return <About />;
    case "portfolio":
      return <Portfolio />;
    case "contact":
      return <Contact />;
    case "resume":
      return <Resume />;
    default :
      return <About />
  }
};

export default CurrentPage;

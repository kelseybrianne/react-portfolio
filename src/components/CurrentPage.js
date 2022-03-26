import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

const CurrentPage = ({ currentPage }) => {
  switch (currentPage) {
    case "About Me":
      return <About />;
    case "Portfolio":
      return <Portfolio />;
    case "Contact":
      return <Contact />;
    case "Resume":
      return <Resume />;
    default :
      return <About />
  }
};

export default CurrentPage;

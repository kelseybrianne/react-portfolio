import { HiOutlineDocumentDownload } from "react-icons/hi";
import resume from "../kelsey-mailau-resume.pdf";
import portrait from "../portrait-of-kelsey-mailau.JPG";
import { Container, Row, Col } from "react-bootstrap";
import techBlog from "../technicals-homepage.png";
import dayPlanner from "../day-planner-screenshot.png";
import portfolio from "../portfolio-screenshot.png";
import textEditor from "../text-editor-homepage.png";
import codeQuiz from "../code-quiz-screenshot.png";

const Navigation = ({ currentPage }) => {
  return currentPage === "About Me" ? (
    <main>
      <h1>Explore my most recent projects in web development</h1>
      <Container className="portfolio-container">
        <Row>
          <Col xs={12} md={6} lg={4} className="relative">
            <img
              src={techBlog}
              className="portfolio-pic"
              alt="tech blog homepage"
            />
            <div className="project-description">
              <h3>Tech Blog</h3>
              <p>This is a tech blog for techs yayyy</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <img
              src={portfolio}
              className="portfolio-pic"
              alt="Portfolio homepage"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <img
              src={dayPlanner}
              className="portfolio-pic"
              alt="day planner homepage"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <img
              src={textEditor}
              className="portfolio-pic"
              alt="text editor homepage"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <img
              src={codeQuiz}
              className="portfolio-pic"
              alt="code quiz homepage"
            />
          </Col>
        </Row>
      </Container>
    </main>
  ) : (
    // <main>
    //   <div>
    //     <h1>Full-stack web developer who cares about design.</h1>
    //   </div>
    //   <div className="about-section">
    //     <div className="bio">
    //       <p>
    //         I'm a full-stack web developer with a passionate work-ethic who
    //         enjoys building beautiful web interfaces with an intuitive user
    //         experience. Currently attending the University of Washington to
    //         receive a certificate in full-stack web development, with newly
    //         developed experience in HTML, JavaScript, Node, Express, Sequelize,
    //         CSS, and responsive web design. Through improved SEO, web page
    //         accessibility, responsive web design, and friendly modern
    //         user-interfaces, I look forward to helping companies increase their
    //         profits and popularity by increasing traffic to their online
    //         platforms and being seen by an audience they deserve.
    //       </p>
    //     </div>
    //     <img
    //       src={portrait}
    //       alt="Kelsey Betteridge kneeling in field"
    //       className="pic"
    //     />
    //   </div>
    // </main>

    <main id="contact-page">
      <h1>Say hello, i'd love to connect.</h1>
      <h2>
        Drop your name, email address, and a brief message below and I will get
        back to you shortly.
      </h2>
      <form className="contact-form">
        <input id="name" type="name" placeholder="Name" />
        <input id="email" placeholder="Email" type="email" />
        <textarea placeholder="Message" />
        <button>Submit</button>
      </form>
    </main>
  );

  // <main id="resume-page">
  //   <div className="resume-div">
  //     <h2>Resume</h2>
  //     <a
  //       href={resume}
  //       target="_blank"
  //       id="download-btn"
  //       rel="noopener noreferrer"
  //     >
  //       {<HiOutlineDocumentDownload />}
  //     </a>
  //   </div>
  //   <h3>Front-End Proficiencies</h3>
  //   <ul>
  //     <li>HTML</li>
  //     <li>CSS</li>
  //     <li>JavaScript</li>
  //     <li>jQuery</li>
  //     <li>Bootstrap</li>
  //     <li>React</li>
  //     <li>Responsive Design</li>
  //   </ul>

  //   <h3>Back-End Proficiencies</h3>
  //   <ul>
  //     <li>Node</li>
  //     <li>Express</li>
  //     <li>MySQL</li>
  //     <li>Sequelize</li>
  //     <li>Handlebars</li>
  //     <li>MongoDB</li>
  //     <li>Mongoose</li>
  //   </ul>
  // </main>
};

export default Navigation;

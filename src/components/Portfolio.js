import { Container, Row, Col } from "react-bootstrap";
import techBlog from "../images/technicals-homepage.png";
import dayPlanner from "../images/day-planner-screenshot.png";
import portfolio from "../images/portfolio-screenshot.png";
import textEditor from "../images/text-editor-homepage.png";
import codeQuiz from "../images/code-quiz-screenshot.png";
import dailies from "../images/dailies-screenshot.png";
import portfolioData from "../data/portfolio.json";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <main>
      <h1>Explore my most recent projects in web development</h1>
      {/* <Container className="portfolio-container">
        <Row>
          {portfolioData.map(({ id, title, url, github, image, alt, description }) => (
            <Col xs={12} md={6} lg={4} className="relative">
              <img
                src={image}
                className="portfolio-pic"
                alt={alt}
              />
              <div className="project-description">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container> */}
      <Container fluid className="portfolio-container">
        <Row className="portfolio-row">
          <Col xs={12} md={6} lg={4} className="project-div">
            <img
              src={techBlog}
              className="portfolio-pic"
              alt="tech blog homepage"
            />
            <a href="https://the-technicals.herokuapp.com/"><div className="project-description">
              <h3>The Technicals <a href="https://github.com/kelseybrianne/tech-blog"><FaGithub className="project-icon" /></a></h3>
              <p>A tech blog for all things tech.</p>
            </div></a>
          </Col>
          <Col xs={12} md={6} lg={4} className="project-div">
            <img
              src={portfolio}
              className="portfolio-pic"
              alt="Portfolio homepage"
            />
            <div className="project-description">
              <h3>Kelsey Betteridge <a href="https://github.com/kelseybrianne/tech-blog"><FaGithub className="project-icon" /></a></h3>
              <p>My portfolio v1.0</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="project-div">
            <img
              src={dayPlanner}
              className="portfolio-pic"
              alt="day planner homepage"
            />
            <div className="project-description">
              <h3>Work Day Scheduler <a href="https://github.com/kelseybrianne/tech-blog"><FaGithub className="project-icon" /></a></h3>
              <p>Plan your work day.</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="project-div">
            <img
              src={textEditor}
              className="portfolio-pic"
              alt="text editor homepage"
            />
            <div className="project-description">
              <h3>JATE <a href="https://github.com/kelseybrianne/tech-blog"><FaGithub className="project-icon" /></a></h3>
              <p>Just another text editor.</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="project-div">
            <img
              src={codeQuiz}
              className="portfolio-pic"
              alt="code quiz homepage"
            />
            <div className="project-description">
              <h3>Code Quiz <a href="https://github.com/kelseybrianne/tech-blog"><FaGithub className="project-icon" /></a></h3>
              <p>Test your HTML, JavaScript, and CSS skills!</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="project-div">
            <img
              src={dailies}
              className="portfolio-pic"
              alt="dailies task tracker homepage"
            />
            <div className="project-description">
              <h3>Dailies <a href="https://github.com/kelseybrianne/tech-blog"><FaGithub className="project-icon" /></a></h3>
              <p>A simple task tracker.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Portfolio;

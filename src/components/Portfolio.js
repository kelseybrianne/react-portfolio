import { Container, Row, Col } from "react-bootstrap";
import { portfolioData } from "../utils/portfolioData.js";
import { FaGithub } from "react-icons/fa";

const Portfolio = ({ theme }) => {
  return (
    <main>
      <h1>Explore my most recent projects in web development</h1>
      <Container className="portfolio-container">
        <Row className="portfolio-row">
          {portfolioData.map(
            ({ id, title, url, github, image, alt, description }) => (
              <Col xs={12} md={6} lg={4} key={id} className="project-div">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={image}
                    className="portfolio-pic"
                    alt={alt}
                  />
                  <div className="project-description">
                    <h3>
                      {title}{" "}
                      <a href={github}>
                        <FaGithub className="project-icon" />
                      </a>
                    </h3>
                    <p>{description}</p>
                  </div>
                </a>
              </Col>
            )
          )}
        </Row>
      </Container>
      {/* <Container fluid className="portfolio-container">
        <Row className="portfolio-row">
          <Col xs={12} md={6} lg={4} className="project-div">
            <a
              href="https://the-technicals.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={techBlog}
                className="portfolio-pic"
                alt="tech blog homepage"
              />
              <div className="project-description">
                <h3>
                  The Technicals{" "}
                  <a href="https://github.com/kelseybrianne/tech-blog">
                    <FaGithub className="project-icon" />
                  </a>
                </h3>
                <p>A tech blog for all things tech.</p>
              </div>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4} className="project-div">
            <a
              href="https://kelseybrianne.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={portfolio}
                className="portfolio-pic"
                alt="Portfolio homepage"
              />
              <div className="project-description">
                <h3>
                  Kelsey Betteridge{" "}
                  <a href="https://github.com/kelseybrianne/portfolio">
                    <FaGithub className="project-icon" />
                  </a>
                </h3>
                <p>My portfolio v1.0</p>
              </div>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4} className="project-div">
            <a
              href="https://kelseybrianne.github.io/day-planner/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={dayPlanner}
                className="portfolio-pic"
                alt="day planner homepage"
              />
              <div className="project-description">
                <h3>
                  Work Day Scheduler{" "}
                  <a href="https://github.com/kelseybrianne/day-planner">
                    <FaGithub className="project-icon" />
                  </a>
                </h3>
                <p>Plan your work day.</p>
              </div>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4} className="project-div">
            <a
              href="https://basic-pwa-text-editor.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={textEditor}
                className="portfolio-pic"
                alt="text editor homepage"
              />
              <div className="project-description">
                <h3>
                  JATE{" "}
                  <a href="https://github.com/kelseybrianne/pwa-text-editor">
                    <FaGithub className="project-icon" />
                  </a>
                </h3>
                <p>Just another text editor.</p>
              </div>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4} className="project-div">
            <a
              href="https://kelseybrianne.github.io/code-quiz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={codeQuiz}
                className="portfolio-pic"
                alt="code quiz homepage"
              />
              <div className="project-description">
                <h3>
                  Code Quiz{" "}
                  <a href="https://github.com/kelseybrianne/code-quiz">
                    <FaGithub className="project-icon" />
                  </a>
                </h3>
                <p>Test your HTML, JavaScript, and CSS skills!</p>
              </div>
            </a>
          </Col>
          <Col xs={12} md={6} lg={4} className="project-div">
            <a
              href="https://kelseybrianne.github.io/dailies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={dailies}
                className="portfolio-pic"
                alt="dailies task tracker homepage"
              />
              <div className="project-description">
                <h3>
                  Dailies{" "}
                  <a href="https://github.com/kelseybrianne/dailies">
                    <FaGithub className="project-icon" />
                  </a>
                </h3>
                <p>A simple task tracker.</p>
              </div>
            </a>
          </Col>
        </Row>
      </Container> */}
    </main>
  );
};

export default Portfolio;

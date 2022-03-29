import { Container, Row, Col } from "react-bootstrap";
import techBlog from "../images/technicals-homepage.png";
import dayPlanner from "../images/day-planner-screenshot.png";
import portfolio from "../images/portfolio-screenshot.png";
import textEditor from "../images/text-editor-homepage.png";
import codeQuiz from "../images/code-quiz-screenshot.png";
import portfolioData from "../data/portfolio.json";

const Portfolio = () => {
  return (
    <main>
      <h1>Explore my most recent projects in web development</h1>
      <Container className="portfolio-container">
        <Row>
          {portfolioData.map(({ id, title, url, github, image, alt, description }) => (
            <Col xs={12} md={6} lg={4} className="relative">
              <img
                src={image}
                className="portfolio-pic"
                alt={alt}
              />
              {/* <div className="project-description">
                <h3>{title}</h3>
                <p>{description}</p>
              </div> */}
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="portfolio-container">
        <Row>
          <Col xs={12} md={6} lg={4} className="relative">
            <img
              src={techBlog}
              className="portfolio-pic"
              alt="tech blog homepage"
            />
            {/* <div className="project-description">
              <h3>Tech Blog</h3>
              <p>This is a tech blog for techs yayyy</p>
            </div> */}
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
  );
};

export default Portfolio;

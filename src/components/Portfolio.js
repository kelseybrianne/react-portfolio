import { Container, Row, Col } from "react-bootstrap";
import techBlog from "../technicals-homepage.png";
import dayPlanner from "../day-planner-screenshot.png";
import portfolio from "../portfolio-screenshot.png";
import textEditor from "../text-editor-homepage.png";
import codeQuiz from "../code-quiz-screenshot.png";

const Portfolio = () => {
  return (
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
  )
}

export default Portfolio

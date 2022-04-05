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
                <img src={image} className="portfolio-pic" alt={alt} />
                <div className="project-description">
                  <div className="project-head">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-title"
                    >
                      <h3>{title} </h3>
                    </a>
                    <a href={github}>
                      <FaGithub className="project-icon" />
                    </a>
                  </div>
                  <p>{description}</p>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </main>
  );
};

export default Portfolio;

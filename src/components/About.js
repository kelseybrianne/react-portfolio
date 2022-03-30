import portrait from "../images/portrait-of-kelsey-mailau.JPG";

const About = () => {
  return (
    <main>
      <div>
        <h1>Full-stack web developer who cares about design.</h1>
      </div>
      <div className="about-section">
        <div className="bio">
          <p>
            I love creating clean and bold websites with my passionate work-ethic and consistent drive to always keep learning and improving. Currently attending the University of Washington to
            receive a certificate in full-stack web development, with newly
            developed experience in React, Bootstrap, Node, Express, Sequelize, and MongoDB. Through improved SEO, responsive web design, and intuitive
            user-interfaces, I look forward to helping companies increase their
            profits and popularity by increasing traffic to their online
            platforms and being seen by an audience they deserve.
          </p>
        </div>
        <img
          src={portrait}
          alt="Kelsey Betteridge kneeling in field"
          className="pic"
        />
      </div>
    </main>
  );
};

export default About;

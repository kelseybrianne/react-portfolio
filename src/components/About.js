import portrait from "../portrait-of-kelsey-mailau.JPG";

const About = () => {
  return (
    <main>
      <div>
        <h1>Full-stack web developer who cares about design.</h1>
      </div>
      <div className="about-section">
        <div className="bio">
          <p>
            I'm a full-stack web developer with a passionate work-ethic who
            enjoys building beautiful web interfaces with an intuitive user
            experience. Currently attending the University of Washington to
            receive a certificate in full-stack web development, with newly
            developed experience in HTML, JavaScript, Node, Express, Sequelize,
            CSS, and responsive web design. Through improved SEO, web page
            accessibility, responsive web design, and friendly modern
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

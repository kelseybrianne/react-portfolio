import resume from "../kelsey-mailau-resume.pdf";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { frontEndProficienciesData, backEndProficienciesData } from "../utils/proficienciesData";

const Resume = () => {
  return (
    <main id="resume-page">
      <div className="resume-div">
        <h2>Resume</h2>
        <a
          href={resume}
          target="_blank"
          id="download-btn"
          rel="noopener noreferrer"
        >
          {<HiOutlineDocumentDownload />}
        </a>
      </div>
      <h3>Front-End Proficiencies</h3>
      <ul className="icon-proficiencies-list">
        {frontEndProficienciesData.map(({ id, name, img, url }) => (
          <li key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={img} alt={name} title={name} />
            </a>
          </li>
        ))}
      </ul>

      <h3>Back-End Proficiencies</h3>
      <ul className="icon-proficiencies-list">
      {backEndProficienciesData.map(({ id, name, img, url, style }) => (
          <li key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={img} alt={name} title={name} style={{style}} />
            </a>
          </li>
        ))}
        {/* <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>Handlebars</li>
        <li>MongoDB</li>
        <li>Mongoose</li> */}
      </ul>
    </main>
  );
};

export default Resume;

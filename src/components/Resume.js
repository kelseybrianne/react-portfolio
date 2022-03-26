import resume from "../kelsey-mailau-resume.pdf";
import { HiOutlineDocumentDownload } from "react-icons/hi";

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
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>React</li>
        <li>Responsive Design</li>
      </ul>

      <h3>Back-End Proficiencies</h3>
      <ul>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>Handlebars</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
      </ul>
    </main>
  );
};

export default Resume;

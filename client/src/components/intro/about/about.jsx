import "./about.css";
import ilyJump from "../../../images/ily_About_Img.jpg";
import modiin from "../../../images/intelge.png";
import IAF from "../../../images/IAF.png";
import Maglan from "../../../images/maglan.jfif";
const About = () => {
  return (
    <div className="about">
      <div className="a_left">
        <div className="a_card bg"></div>
        <div className="a_card">
          <img className="a_img" src={ilyJump} alt="" />
        </div>
      </div>
      <div className="a_right">
        <h1 className="a_title">About Me</h1>
        <p className="a_sub">
          A military veteran with experience serving as a Commander and Staff
          Sergeant in Maglan unit and as Head of Research Unit at the Timroon
          Center in the IDF. Skilled in multiple programming languages and
          tools, with education in fullstack development. Fluent in Hebrew and
          English, holding Israeli and American citizenship. Creative,
          analytical, detail-oriented, charismatic and capable of making
          decisions under pressure.
        </p>
        <div className="res">
          <img className="resImg" src={modiin} alt="" />
          <h3 className="resDesc">
            Head of Research Unit at the Timroon Center (Modash, 8200){" "}
          </h3>
        </div>
        <div className="res">
          <img className="resImg" src={Maglan} alt="" />
          <h3 className="resDesc">
            Commander and Staff Sergeant in Maglan unit
          </h3>
        </div>
        <div className="res">
          <img className="resImg" src={IAF} alt="" />
          <h3 className="resDesc">Flight Course</h3>
        </div>
      </div>
    </div>
  );
};
export default About;

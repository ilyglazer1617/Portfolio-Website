import "./intro.css";
import Ily from "../../images/ilyImg.png";
const Intro = () => {
  return (
    <div className="into">
      <div className="i_left">
        <div className="i_left_wrraper">
          <h2 className="i_intro">Hello, my name is </h2>
          <h1 className="i_name">Ily Glazer</h1>
          <div className="i_title">
            <div className="i_title_wrapper">
              <div className="i_title_item">Full Stack Developer</div>
              <div className="i_title_item">Frontend Developer</div>
              <div className="i_title_item">backend Developer</div>
            </div>
          </div>
          <p className="i_desc">
            As a veteran of the IDF, I bring to the table extensive leadership
            experience, having served as both a Commander and Staff Sergeant in
            the highly-regarded Maglan unit. My time as Head of the Research
            team at the Timroon Center in 8200 unit, has honed my skills in
            analysis, creativity, and goal setting, making me a detail-oriented,
            process-driven individual. My sociability, charisma, and ability to
            make sound decisions under pressure have consistently been praised
            by colleagues and superiors. I am a driven, passionate professional
            who excels in fast-paced, challenging environments.
          </p>
        </div>
      </div>
      <div className="i_right">
        <div className="i_bg"></div>
        <img className="i_img" src={Ily} alt="" />
      </div>
    </div>
  );
};

export default Intro;

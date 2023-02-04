import "./toggle.css";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import { ThemeContext } from "./../../context";
import { useContext } from "react";
const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handelClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src={sun} alt="" className="t_icon" />
      <img src={moon} alt="" className="t_icon" />
      <div
        onClick={handelClick}
        style={{ left: theme.state.darkMode ? 0 : "25px" }}
        className="t_button"
      >
        {" "}
      </div>
    </div>
  );
};

export default Toggle;

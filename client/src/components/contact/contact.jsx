import "./contact.css";
import phone from "../../images/phone.png";
import email from "../../images/email.png";
import address from "../../images/address.png";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const formRef = useRef();
  // const navigate = use;
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="c">
      <div className="c_bg"> </div>
      <div className="c_wrapper">
        <div className="cLeft">
          <h1 className="c_title">Conent Me, Im open for job options</h1>
          <div className="cInfo">
            <div className="cInfoItem">
              <img src={phone} alt="" className="c_icon" />
              054-394-2299
            </div>
            <div className="cInfoItem">
              <img src={email} alt="" className="c_icon" />
              ilyglazer1617@gmail.com
            </div>
            <div className="cInfoItem">
              <img src={address} alt="" className="c_icon" />
              Tel-Aviv Israel
            </div>
          </div>
        </div>
        <div className="cRight">
          <p className="c_desc">
            <b> I will be more than happy to work with you,</b> contact me and
            we will continue the work from there
          </p>
          <form ref={formRef} onSubmit={handelSubmit}>
            <input type="text" placeholder="Name/Company" name="userName" />
            <input type="text" placeholder="Contant" name="subject" />
            <input
              type="text"
              placeholder="Name/Company email"
              name="userName_email"
            />
            <textarea
              placeholder="Message"
              id=""
              rows="5"
              name="message"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

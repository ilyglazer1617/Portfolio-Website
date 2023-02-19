import "./contact.css";
import phone from "../../images/phone.png";
import email from "../../images/email.png";
import address from "../../images/address.png";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
const Contact = () => {
  const formRef = useRef();
  // const navigate = use;
  const handelSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s3108lq",
        "template_jj4ldom",
        formRef.current,
        "PTGzmq9qlpGss59rc"
      )
      .then(
        (result) => {
          console.log("text");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c_bg"> </div>
      <div className="c_wrapper">
        <div className="cLeft">
          <h1 className="c_title">
            Contact me, I'm open for job opportunities
          </h1>
          <div className="cInfo">
            <div className="cInfoItem">
              <img src={phone} alt="" className="c_icon" />
              <a href="tel:054 394 2299">054-394-2299</a>
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
            <b>
              I'd be happy to work with you! Provide your contact info below and
              I'll reach out.
            </b>
          </p>
          <form ref={formRef} onSubmit={handelSubmit}>
            <input type="text" placeholder="Name" name="userName" />
            <input type="text" placeholder="Company" name="subject" />
            <input type="text" placeholder="Email" name="userName_email" />
            <textarea
              placeholder="Message"
              id=""
              rows="5"
              name="message"
            ></textarea>
            <button type="submit" onClick={() => alert("Message sent!")}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

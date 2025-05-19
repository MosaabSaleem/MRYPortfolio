import "./Styles/Contact.css";
import AustraliaIcon from "./Assets/australiaIcon.png";
import CleanIcon from "./Assets/cleanIcon.png";
import ReplyIcon from "./Assets/ReplyIcon.png";

export default function Contact() {
    return (
        <div className="Contact">
          <p className="ContactText">Web design and development that’s tailored, scalable, and built for real business results.</p>
          <p className="ContactText">Contact us to get started!</p>
          <p className="ContactText">0412345678</p>
          <p className="ContactText">MRY@outlook.com</p>
          <div className="ContactIcons">
            <div className="ContactIcon">
              <img src={AustraliaIcon} alt="Australia Icon" className="ContactIconImage"/>
              <p className="ContactIconText">100% Australian</p>
            </div>
            <div className="ContactIcon">
              <img src={CleanIcon} alt="Clean Icon" className="ContactIconImage"/>
              <p className="ContactIconText">Clean Custom Code</p>
            </div>
            <div className="ContactIcon">
              <img src={ReplyIcon} alt="Reply Icon" className="ContactIconImage"/>
              <p className="ContactIconText">Fast Replies</p>
            </div>
          </div>
        </div>
    );
}
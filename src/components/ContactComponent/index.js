import ScrollAnimation from 'react-animate-on-scroll'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookSquare} from 'react-icons/fa'
import {SiGithub, SiGmail} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'

import './index.css'

const ContactComponent = () => (
  <div className="contact-main-container" id="contact">
    <ScrollAnimation
      animateIn="fadeIn"
      duration="2s"
      animateOnce
      className="scrollContainer contact"
    >
      <div className="contact-sub-container">
        <h1 className="name-content">Get In Touch</h1>
        <div className="conclusion-content">
          <p className="summery-content">
            I’m excited to explore new opportunities in Full Stack Development!
            My resume is attached, and I’d love to connect with anyone who has
            or knows of relevant openings. Looking forward to new
            challenges—thank you for your time!
          </p>
        </div>
        <a href="mailto:6y.navin@gmail.com?" target="_blank" rel="noreferrer">
          <button type="button" className="glowing-btn">
            <span className="glowing-txt">
              S<span className="faulty-letter">ay</span>Hello
            </span>
          </button>
        </a>
      </div>
    </ScrollAnimation>
    <div className="social-media-links">
      <ul className="link-item-container">
        <li className="link-li-item-container">
          <a
            href="https://github.com/navinO0"
            target="_blank"
            rel="noreferrer"
            className=" nav-link-item-contact "
          >
            <SiGithub className="social-links-icons" />
          </a>
        </li>

        <li className="link-li-item-container">
          <a
            href="https://www.linkedin.com/in/naveen-kumar-kambham"
            target="_blank"
            rel="noreferrer"
            className=" nav-link-item-contact "
          >
            <BsLinkedin className="social-links-icons" />
          </a>
        </li>
        <li className="link-li-item-container nav-link-item">
          <a
            href="mailto:6y.navin@gmail.com?"
            target="_blank"
            rel="noreferrer"
            className=" nav-link-item-contact "
          >
            <SiGmail className="social-links-icons" />
          </a>
        </li>
        <li className="link-li-item-container">
          <a
            href="https://instagram.com/o_0.navin?igshid=ZDdkNTZiNTM="
            target="_blank"
            rel="noreferrer"
            className=" nav-link-item-contact "
          >
            <AiOutlineInstagram className="social-links-icons" />
          </a>
        </li>
        <li className="link-li-item-container ">
          <a
            href="https://www.facebook.com/profile.php?id=100070310269009"
            target="_blank"
            rel="noreferrer"
            className=" nav-link-item-contact"
          >
            <FaFacebookSquare className="social-links-icons" />
          </a>
        </li>
      </ul>
      <p className="footer-content">Created by Navin</p>
    </div>
  </div>
)

export default ContactComponent

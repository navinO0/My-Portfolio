import AnchorLink from 'react-anchor-link-smooth-scroll'
import {GrReactjs} from 'react-icons/gr'
import {SiAboutdotme} from 'react-icons/si'
import {MdContactMail} from 'react-icons/md'

import {AiFillFilePdf} from 'react-icons/ai'

import './index.css'

const HeaderComponent = () => (
  <div className="header-main-container">
    <div className="header-sub-container-lg">
      <div className="header-right">
        <AnchorLink
          href="#aboutComponent"
          className="fadeInDown header-links nav-link-item hover-underline-animation"
        >
          About
        </AnchorLink>
        <AnchorLink
          href="#Projects"
          className="header-links fadeInDown nav-link-item hover-underline-animation"
        >
          Projects
        </AnchorLink>
        <AnchorLink
          href="#contact"
          className="header-links fadeInDown nav-link-item hover-underline-animation"
        >
          Contact
        </AnchorLink>
        <div className="buttons fadeInDown">
          <div className="container">
            <a
              href="https://drive.google.com/file/d/1-P77C_iQxDjHR12geLcdcPXqnuKb3NDN/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
              className="btn effect01"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="header-sub-container-sm">
      <div className="header-right">
        <AnchorLink href="#aboutComponent" className="header-links fadeInDown ">
          <SiAboutdotme className=" header-icons" />
        </AnchorLink>
        <AnchorLink href="#Projects" className="header-links fadeInDown ">
          <GrReactjs className=" header-icons" />
        </AnchorLink>
        <AnchorLink href="#contact" className="header-links fadeInDown ">
          <MdContactMail className=" header-icons" />
        </AnchorLink>
        <a
          href="https://drive.google.com/file/d/1-P77C_iQxDjHR12geLcdcPXqnuKb3NDN/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          className="fadeInDown nav-link-item"
        >
          <AiFillFilePdf className=" header-icons" />
        </a>
      </div>
    </div>
  </div>
)

export default HeaderComponent

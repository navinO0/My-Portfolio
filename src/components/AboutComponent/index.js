import ScrollAnimation from 'react-animate-on-scroll'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {SiJavascript, SiExpress, SiNodedotjs} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'

import './index.css'

const AboutComponent = () => (
  <div className="about-main-container " id="aboutComponent">
    <ScrollAnimation
      animateIn="fadeIn"
      duration={2}
      animateOnce
      className="scrollContainer"
    >
      <div className="about-sub-container">
        <div className="about-me-heading-container">
          <h1 className="section-heading">About Me</h1>
        </div>

        <div className="about-info-card-container">
          <p className="summery-content ">
            Hello! My name is Naveen and I enjoy creating things that live on
            the internet I believe that the main reason is that front-end
            development satisfies my need for creativity. It enabled me to
            easily put my ideas into digital form and get results back really
            quick. I still remember the first time I created an HTML page and
            opened it in the browser. A whole new world of possibilities
            appeared before my eyes. I became really passionate and kept
            creating since then. I’m really grateful that I’m able to make a
            living through it and made my passion my work. It absolutely has its
            ups and downs but if you love what you do and are able to provide
            value to people, the outcomes are far more rewarding! :-)
          </p>
          <p className="summery-content ">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="tech-stack-display">
            <div className="skill-sections">
              <ul className="ul-tech-stack">
                <li className="tech-stack-item">
                  <AiFillHtml5 className=" list-item" />
                  <p className=" list-item">HTML</p>
                </li>
                <li className="tech-stack-item">
                  <IoLogoCss3 className=" list-item" />
                  <p className=" list-item">CSS</p>
                </li>
                <li className="tech-stack-item">
                  <SiJavascript className=" list-item" />
                  <p className=" list-item"> Java Script</p>
                </li>
                <li className="tech-stack-item">
                  <GrReactjs className=" list-item" />
                  <p className=" list-item"> React.js</p>
                </li>
              </ul>
            </div>
            <div className="skill-sections">
              <ul className="ul-tech-stack">
                <li className="tech-stack-item">
                  <SiExpress className="list-item fadeInUp" />
                  <p className="list-item fadeInUp">Express.js</p>
                </li>
                <li className="tech-stack-item">
                  <SiNodedotjs className="fadeInUp list-item" />
                  <p className="list-item fadeInUp">Node.js</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </div>
)

export default AboutComponent

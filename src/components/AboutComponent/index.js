import ScrollAnimation from 'react-animate-on-scroll'
import styled from 'styled-components'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiJira,
  SiPostgresql,
  SiApachekafka,
  SiElasticsearch,
  SiFastify,
  SiGithub,
  SiMongodb,
  SiApachejmeter,
  SiConfluence,
  SiPm2,
  SiGit,
  SiPostman,
} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {DiRedis} from 'react-icons/di'

import './index.css'
import '../HeaderComponent/index.css'

const ListItem = styled.li`
  color: rgba(255, 255, 255, 0.64);
  list-style: none;
  margin: 20px;
  font-size: 40px;
  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5));
  transform: translateY(0px);
  animation: float ${({duration}) => duration || '2s'} ease-in-out infinite;
  visibility: ${({disp}) => (disp ? 'hide' : 'block')};
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`

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
            Hello! My name is Naveen, and I’m a Backend Developer with 2 years
            of experience in building scalable and high-performance web
            applications. My journey into development started with a passion for
            problem-solving and creating efficient digital solutions. Over time,
            I honed my skills in Node.js, Express.js, Fastify, SQL, NoSQL, and
            React.js, focusing on API development, performance optimization, and
            system security. I love tackling complex challenges, debugging, and
            collaborating with cross-functional teams to deliver seamless
            applications. Exploring DevOps, CI/CD, and cloud technologies (AWS,
            Azure) has further fueled my passion for building robust and
            efficient systems. I’m grateful to have turned my passion into a
            career, constantly learning and improving to create impactful
            digital experiences! 🚀
          </p>

          <p className="summery-content ">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="tech-stack-display">
            <div className="skill-sections">
              <ul className="ul-tech-stack">
                <ListItem
                  duration="1.3s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <AiFillHtml5 className="list-item-icon " />
                  <p className="list-item-text">HTML</p>
                </ListItem>
                <ListItem duration="1.3s">
                  <AiFillHtml5 className="list-item-icon transparent" />
                </ListItem>
                <ListItem
                  duration="1.5s"
                  disp="true"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <IoLogoCss3 className="list-item" />
                  <p className="list-item-text">CSS</p>
                </ListItem>
                <ListItem duration="1.7s">
                  <SiJavascript className="list-item transparent" />
                </ListItem>
              </ul>
            </div>
            <div className="skill-sections">
              <ul className="ul-tech-stack">
                <ListItem duration="1.7s">
                  <SiExpress className="list-item fadeInUp transparent" />
                </ListItem>
                <ListItem
                  duration="1.7s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <SiExpress className="list-item fadeInUp" />
                  <p className="list-item-text fadeInUp">Express.js</p>
                </ListItem>
                <ListItem duration="1.4s">
                  <SiNodedotjs className="fadeInUp list-item transparent" />
                </ListItem>
                <ListItem
                  duration="1.4s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <SiNodedotjs className="fadeInUp list-item" />
                  <p className="list-item-text fadeInUp">Node.js</p>
                </ListItem>
              </ul>
            </div>
            <div className="skill-sections">
              <ul className="ul-tech-stack">
                <ListItem
                  duration="1.7s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <SiPostgresql className="list-item fadeInUp" />
                  <p className="list-item-text fadeInUp">PostgreSQL</p>
                </ListItem>
                <ListItem duration="1.2s">
                  <SiApachekafka className="fadeInUp list-item transparent" />
                </ListItem>
                <ListItem
                  duration="1.2s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <SiApachekafka className="fadeInUp list-item" />
                  <p className="list-item-text fadeInUp">Kafka</p>
                </ListItem>
              </ul>
            </div>
            <div className="skill-sections">
              <ul className="ul-tech-stack">
                <ListItem duration="1.5s">
                  <SiGithub className="list-item fadeInUp transparent" />
                </ListItem>
                <ListItem
                  duration="1.5s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <SiGithub className="list-item fadeInUp" />
                  <p className="list-item-text fadeInUp">Github</p>
                </ListItem>
                <ListItem duration="1.3s">
                  <SiMongodb className="fadeInUp list-item transparent" />
                </ListItem>
                <ListItem
                  duration="1.3s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <SiMongodb className="fadeInUp list-item" />
                  <p className="list-item-text fadeInUp">MongoDB</p>
                </ListItem>
              </ul>
            </div>
            <div className="skill-sections">
              <ul className="ul-tech-stack">
                <ListItem
                  duration="1.5s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <SiJavascript className="list-item fadeInUp " />
                  <p className="list-item-text fadeInUp">Javascript</p>
                </ListItem>
                <ListItem duration="1.5s">
                  <SiGithub className="list-item fadeInUp transparent" />
                </ListItem>
                <ListItem
                  duration="1.3s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <GrReactjs className="fadeInUp list-item " />
                  <p className="list-item-text fadeInUp">React</p>
                </ListItem>
                <ListItem duration="1.3s">
                  <SiMongodb className="fadeInUp list-item transparent" />
                </ListItem>
              </ul>
            </div>
            <div className="skill-sections">
              <ul className="ul-tech-stack">
                <ListItem duration="1.7s">
                  <SiExpress className="list-item fadeInUp transparent" />
                </ListItem>
                <ListItem
                  duration="1.7s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <DiRedis className="list-item fadeInUp" />
                  <p className="list-item-text fadeInUp">Redis</p>
                </ListItem>
                <ListItem duration="1.4s">
                  <SiNodedotjs className="fadeInUp list-item transparent" />
                </ListItem>
                <ListItem
                  duration="1.4s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <SiJira className="fadeInUp list-item" />
                  <p className="list-item-text fadeInUp">Jira</p>
                </ListItem>
              </ul>
            </div>
            <div className="skill-sections">
              <ul className="ul-tech-stack">
                <ListItem
                  duration="1.5s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <SiElasticsearch className="list-item fadeInUp " />
                  <p className="list-item-text fadeInUp">Elasticsearch</p>
                </ListItem>
                <ListItem duration="1.5s">
                  <SiGithub className="list-item fadeInUp transparent" />
                </ListItem>
                <ListItem
                  duration="1.3s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <SiFastify className="fadeInUp list-item " />
                  <p className="list-item-text fadeInUp">Fastify</p>
                </ListItem>
                <ListItem duration="1.3s">
                  <SiMongodb className="fadeInUp list-item transparent" />
                </ListItem>
              </ul>
            </div>
            <div className="skill-sections">
              <ul className="ul-tech-stack">
                <ListItem duration="1.7s">
                  <SiApachejmeter className="list-item fadeInUp transparent" />
                </ListItem>
                <ListItem
                  duration="1.6s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <SiApachejmeter className="list-item fadeInUp" />
                  <p className="list-item-text fadeInUp">Jmeter</p>
                </ListItem>
                <ListItem duration="1.4s">
                  <SiNodedotjs className="fadeInUp list-item transparent" />
                </ListItem>
                <ListItem
                  duration="1.2s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <SiConfluence className="fadeInUp list-item" />
                  <p className="list-item-text fadeInUp">Confluence</p>
                </ListItem>
              </ul>
            </div>
            <div className="skill-sections">
              <ul className="ul-tech-stack">
                <ListItem
                  duration="1.5s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <SiPm2 className="list-item fadeInUp " />
                  <p className="list-item-text fadeInUp">PM2</p>
                </ListItem>
                <ListItem duration="1.5s">
                  <SiGithub className="list-item fadeInUp transparent" />
                </ListItem>
                <ListItem
                  duration="1.3s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <SiGit className="fadeInUp list-item " />
                  <p className="list-item-text fadeInUp">Git</p>
                </ListItem>
                <ListItem duration="2.3s">
                  <SiMongodb className="fadeInUp list-item transparent" />
                </ListItem>
              </ul>
            </div>
            <div className="skill-sections">
              <ul className="ul-tech-stack">
                <ListItem duration="2.7s">
                  <SiApachejmeter className="list-item fadeInUp transparent" />
                </ListItem>
                <ListItem
                  duration="1.2s"
                  className="fadeInDown header-links nav-link-item pointer"
                >
                  <SiPostman className="fadeInUp list-item" />
                  <p className="list-item-text fadeInUp">Postman</p>
                </ListItem>
                <ListItem duration="2.4s">
                  <SiNodedotjs className="fadeInUp list-item transparent" />
                </ListItem>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </div>
)

export default AboutComponent

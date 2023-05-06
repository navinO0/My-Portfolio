import ScrollAnimation from 'react-animate-on-scroll'
import {RiGamepadFill} from 'react-icons/ri'
import {BsEmojiHeartEyes, BsGithub} from 'react-icons/bs'
import {IoMdPhotos} from 'react-icons/io'
import {BiLinkExternal} from 'react-icons/bi'

import './index.css'

const MiniProjectItem = props => {
  const {eachOne} = props
  const {
    projectLink,
    projectTitle,
    projectAbt,
    gitHubLink,
    technologiesUsed,
  } = eachOne

  const renderIcon = () => {
    switch (projectTitle) {
      case 'Emoji Game':
        return <BsEmojiHeartEyes className="mini-project-icon" />

      case 'Mini Games (Match Game)':
        return <IoMdPhotos className="mini-project-icon" />
      case 'Mini Games (Rock paper Scissors)':
        return <RiGamepadFill className="mini-project-icon" />
      default:
        return ''
    }
  }

  return (
    <li className="miniProject-li-item-container">
      <div className="miniProject-main-container">
        <ScrollAnimation animateIn="fadeIn " duration={2} animateOnce>
          <div className="credentials-links-container-mini">
            {renderIcon()}
            <div className="social-links">
              <a
                href={gitHubLink}
                target="_blank"
                rel="noreferrer"
                className=" nav-link-item-contact "
              >
                <BsGithub className="social-links-icons project-icon" />
              </a>
              <a
                href={projectLink}
                target="_blank"
                rel="noreferrer"
                className=" nav-link-item-contact "
              >
                <BiLinkExternal className="social-links-icons  project-icon" />
              </a>
            </div>
          </div>

          <div className="react-logo-redirect-link">
            <a
              href={projectLink}
              target="_blank"
              rel="noreferrer"
              className="titles nav-link-item-project hover-underline-animation-project"
            >
              {projectTitle}{' '}
            </a>
          </div>

          <div className="project-description-container">
            <p className="content">{projectAbt}</p>
          </div>
          <div className="project-technologies-used-container">
            <p className="content">{technologiesUsed}</p>
          </div>
        </ScrollAnimation>
      </div>
    </li>
  )
}

export default MiniProjectItem

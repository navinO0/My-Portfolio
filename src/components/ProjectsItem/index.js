import ScrollAnimation from 'react-animate-on-scroll'
// import {BiLinkExternal} from 'react-icons/bi'
import './index.css'

const ProjectItem = props => {
  const {projectItem} = props
  const {
    id,
    thumbnail,
    projectLink,
    projectTitle,
    projectAbt,
    projectKeyPoints,
    technologiesUsed,
    credentials,
  } = projectItem

  const ordThumb = parseInt(id) % 2 === 0 ? 0 : 1
  const ordCont = parseInt(id) % 2 === 0 ? 1 : 0
  const scrollDuration = 2
  return (
    <>
      <li className="project-list-item">
        <a
          href={projectLink}
          target="_blank"
          rel="noreferrer"
          className="titles nav-link-item-project hover-underline-animation-project"
        >
          {projectTitle}{' '}
        </a>
        <div className="project-item-list-container">
          <div className="project-image-container" style={{order: ordCont}}>
            <ScrollAnimation
              animateIn="fadeIn "
              duration={scrollDuration}
              animateOnce
            >
              <img
                src={thumbnail}
                className="project-item-thumbnail "
                alt={projectTitle}
              />

              <p className="content "> {credentials}</p>
            </ScrollAnimation>
          </div>
          <div className="details-container" style={{order: ordThumb}}>
            <ScrollAnimation
              animateIn="fadeInUp "
              duration={scrollDuration}
              animateOnce
            >
              <p className="content ">{projectAbt}</p>
            </ScrollAnimation>
            <ul className="key-points-ul-container">
              {projectKeyPoints.map(eachPoint => (
                <li className="key-points-list-item ">
                  <ScrollAnimation
                    animateIn="fadeInUp "
                    duration={scrollDuration}
                    animateOnce
                  >
                    <p className="content ">{eachPoint}</p>
                  </ScrollAnimation>
                </li>
              ))}
            </ul>
            <ScrollAnimation
              animateIn="fadeInUp "
              duration={scrollDuration}
              offset="50"
              animateOnce
            >
              <p className="content ">Technologies Used: </p>
              <p className=" content ">{technologiesUsed}</p>
            </ScrollAnimation>
          </div>
        </div>
      </li>
      <li className="project-list-item-sm">
        <a
          href={projectLink}
          target="_blank"
          rel="noreferrer"
          className="titles nav-link-item-project"
        >
          {projectTitle}{' '}
        </a>
        <div className="project-item-list-container">
          <div className="project-image-container">
            <ScrollAnimation
              animateIn="fadeIn "
              duration={scrollDuration}
              animateOnce
            >
              <img
                src={thumbnail}
                className="project-item-thumbnail "
                alt={projectTitle}
              />

              <p className="content "> {credentials}</p>
            </ScrollAnimation>
          </div>
          <div className="details-container">
            <ScrollAnimation
              animateIn="fadeInUp "
              duration={scrollDuration}
              animateOnce
            >
              <p className="content ">{projectAbt}</p>
            </ScrollAnimation>
            <ul className="key-points-ul-container">
              {projectKeyPoints.map(eachPoint => (
                <li className="key-points-list-item ">
                  <ScrollAnimation
                    animateIn="fadeInUp "
                    duration={scrollDuration}
                    animateOnce
                  >
                    <p className="content ">{eachPoint}</p>
                  </ScrollAnimation>
                </li>
              ))}
            </ul>
            <ScrollAnimation
              animateIn="fadeInUp "
              duration={scrollDuration}
              offset="50"
              animateOnce
            >
              <p className="content ">Technologies Used: </p>
              <p className=" content ">{technologiesUsed}</p>
            </ScrollAnimation>
          </div>
        </div>
      </li>
    </>
  )
}
export default ProjectItem

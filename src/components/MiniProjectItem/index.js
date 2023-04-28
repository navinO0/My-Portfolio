const MiniProjectItem = props => {
  const {eachOne} = props
  const {
    projectLink,
    projectTitle,
    projectAbt,

    technologiesUsed,
  } = eachOne
  return (
    <li className="miniProject-li-item-container">
      <div className="miniProject-main-container">
        <div className="react-logo-redirect-link">
          <p>{projectLink}</p>
          <p>{projectTitle}</p>
        </div>
        <div className="mini-project-description-container">
          <p className="mini-content">{projectAbt}</p>
        </div>
        <div className="mini-project-technologies-used-container">
          <p className="mini-content">{technologiesUsed}</p>
        </div>
      </div>
    </li>
  )
}

export default MiniProjectItem

import './index.css'
import ProjectItem from '../ProjectsItem'

const projectsObject = [
  {
    id: '1',
    projectTitle: 'Movies App (Netflix/Amazon Prime Clone)',
    thumbnail:
      'https://res.cloudinary.com/dzapdxkgc/image/upload/v1682670452/Screenshot_2023-04-27_165404_norkzl.png',
    projectLink: 'https://minipronavin.ccbp.tech',
    projectAbt:
      'Implemented responsive OTT platform app like Netflix/Amazon Clone where users can see movies like popular, trending, top-rated, and also can search movies and view specific movie details',
    projectKeyPoints: [
      'Implemented different routes for features like login, home, popular, profile by using React Router components Route, Switch, Link',
      'Implemented horizontal scrolling (In trending, top-rated, and originals sections) using React Third Party library called React Slick.',
      'Used Figma mockups to implement UI-rich and pixel-perfect React components.',
      'Explored open-source APIs for movies database and picked TMDb APIs for authentication, movies by category, and movie search APIs',
      ' Implemented username and password authentication and persisted login state using client storage.',
      'Implemented a protected route to ensure only authenticated users can access the pages like user profile, movies by category, etc.',
    ],
    technologiesUsed:
      ' HTML, CSS, JavaScript, React JS, Bootstrap, React Slick, Figma, client storage',
    credentials: 'User Name : rahul  And  Password : rahul@2021',
  },
  {
    id: '2',
    projectTitle: 'Nxt Watch',
    thumbnail:
      'https://res.cloudinary.com/dzapdxkgc/image/upload/v1682670457/Screenshot_2023-04-27_190601_zbojz6.png',
    projectLink: 'https://nxtwatchnvin.ccbp.tech',
    projectAbt:
      'Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also can search videos and view specific video details, and users can toggle the theme (Light/Dark).',
    projectKeyPoints: [
      'Implemented Different pages like Login, Home, Trending, Gaming, Saved videos using React components, props, state, lists, event handlers, form inputs.',
      'Authenticating by taking username, password and doing login post HTTP API Call.',
      'Persisted user login state by keeping jwt token in local storage, Sending it in headers of further API calls to authorize the user.',
      'Implemented different routes for Login, Home, Trending, Gaming, Saved videos, Video item details pages by using React Router components Route, Switch, Link.',
      ' Redirecting to the login page if the user tries to open Home, Trending, Gaming, Saved videos, Video item details routes which need authentication by implementing protected Route.',
    ],
    technologiesUsed:
      ' React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token,Authorization, Authentication',
    credentials: 'User Name : rahul  And  Password : rahul@2021',
  },
  {
    id: '3',
    projectTitle: 'Jobby App',
    thumbnail:
      'https://res.cloudinary.com/dzapdxkgc/image/upload/v1682670459/Screenshot_2023-04-27_191050_wyv8n8.png',
    projectLink: 'https://jobbynavin.ccbp.tech/',
    projectAbt:
      'Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type, etc',
    projectKeyPoints: [
      ' Implemented different pages like Login, Home, Jobs, Job item details using React components, props, state, lists, event handlers, form inputs.',
      ' Authenticating by taking username, password and doing login post HTTP API Call.',
      ' Persisted user login state by keeping jwt token in client storage, Sending it in headers of further API calls to authorize the user.',
      'Implemented different routes for Login, Home, Jobs, Job item details pages by using React Router components Route, Switch, Link.',
      ' Implemented filters and search text by sending them as query parameters to jobs API calls.',
      'Redirecting to the login page if the user tries to open Home, Jobs, Job item details routes which need authentication by implementing protected Route.',
    ],
    technologiesUsed:
      ' React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization, Authentication',
    credentials: 'User Name : rahul   And  Password : rahul@2021',
  },
]

const ProjectsComponents = () => (
  <div className="projects-main-container" id="Projects">
    <div className="projects-sub-container">
      <ul className="projects-ul-list-container">
        {projectsObject.map(projectItem => (
          <ProjectItem projectItem={projectItem} key={projectItem.id} />
        ))}
      </ul>
    </div>
  </div>
)

export default ProjectsComponents

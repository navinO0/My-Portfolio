import './index.css'
import ProjectItem from '../ProjectsItem'
import MiniProjectItem from '../MiniProjectItem'
// import MiniProjectItem from '../MiniProjectItem'

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
    gitHubLink: 'https://github.com/navinO0/Movies-App.git',
  },
  {
    id: '2',
    projectTitle: 'Nxt Watch',
    thumbnail:
      'https://res.cloudinary.com/dzapdxkgc/image/upload/v1682699386/Screenshot_2023-04-27_190648_aggiwl.png',
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
    gitHubLink: 'https://github.com/navinO0/NxtWatch.git',
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
    gitHubLink: 'https://github.com/navinO0/jobbyApp.git',
  },
  {
    id: '4',
    projectTitle: 'Form Validation',
    thumbnail:
      'https://res.cloudinary.com/dzapdxkgc/image/upload/v1683199213/Screenshot_2023-05-04_164920_ll7jss.png',
    projectLink: 'https://form-validation-by-navin.netlify.app/',
    projectAbt:
      'Implemented simple form where user can register their details and view the registered users details.And user can search for a particular person details using search component.',
    projectKeyPoints: [
      'Validation Futures',
      'Name, age, gender are Required fields',
      'Mobile And Emergency Contact number which Accepts Valid Indian Number',

      'If Govt ID type is aadhaar the govt id will only accepts digits and length should be 12 digits.',
      'If Govt ID type is PAN will accepts alpha Numerics and length should be 10  characters.',
      'Implemented different Routes like register route where user can register their details And users route where user can see the registered users list.',
      ' Implemented Backend services like GET and POST. In the POST request the Users details is stored the database and In GET request it will give all the users details present in the Database.',
      ' Components And Hooks Used:',
      'React Form Hook, Axios, React-Datatable, React-csv,React-Router, Yup validation library.',
    ],
    technologiesUsed:
      ' React JS, JS, CSS, Routing, REST API Calls, Node, Express.js, sqlite',
    gitHubLink: 'https://github.com/navinO0/form-validation-frontend.git',
  },
]

const miniProjectObj = [
  {
    id: '1',
    projectTitle: 'Emoji Game',

    projectLink: 'https://navinemogame.ccbp.tech/',
    gitHubLink: 'https://github.com/navinO0/emoji-game.git',
    projectAbt:
      'Developed responsive Emoji memory game where users can win it by clicking unique emoji each time till all displayed emojis are clicked. All emojis positions will be randomized after each click',
    technologiesUsed: ' React JS, CSS, Bootstrap',
  },
  {
    id: '2',
    projectTitle: 'Mini Games (Match Game)',

    projectLink: 'https://matchgme.ccbp.tech/',
    gitHubLink: 'https://github.com/navinO0/matchGame.git',
    projectAbt:
      'Developed responsive image memory game where users can increase their Score by clicking matching image with the displayed random image each time till all displayed images are clicked.',
    technologiesUsed: ' React JS, CSS, Bootstrap',
  },
  {
    id: '3',
    projectTitle: 'Mini Games (Rock paper Scissors)',

    projectLink: 'https://rpcgamenavin.ccbp.tech/',
    gitHubLink: 'https://github.com/navinO0/Rock-Paper-Scissor-game.git',
    projectAbt:
      'Rock, Paper, Scissors. The familiar game of Rock, Paper, Scissors is played like this: at the same time, two players display one of three symbols: a rock, paper, or scissors. A rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it.',
    technologiesUsed: ' React JS, CSS, Bootstrap',
  },
]

const ProjectsComponents = () => (
  <div className="projects-main-container" id="Projects">
    <div className="projects-sub-container">
      <h1 className="section-heading project-heading">
        Check out my Recent projects
      </h1>
      <ul className="projects-ul-list-container">
        {projectsObject.map(projectItem => (
          <ProjectItem projectItem={projectItem} key={projectItem.id} />
        ))}
      </ul>
      <ul className="projects-ul-list-container-mini">
        {miniProjectObj.map(projectItem => (
          <MiniProjectItem eachOne={projectItem} key={projectItem.id} />
        ))}
      </ul>
    </div>
  </div>
)

export default ProjectsComponents

import {Fade} from 'react-awesome-reveal'
import {ReactTyped} from 'react-typed'
import './index.css'

const HomeComponent = () => (
  <div className="home-component-main-container " data-aos="fade-up">
    <Fade
      animateIn="fadeIn"
      duration={2000}
      animateOnce
      className="scrollContainer"
    >
      <div>
        <div className="home-component-sub-container">
          <div>
            <p className="name-heading ">Hi, My Name is</p>
          </div>
          <div className="big-name-content-container ">
            <h1 className="name-content ">Naveen Kumar</h1>
            <h3 className="short-description ">I Build Things for web.</h3>
          </div>
          <div className="summery-container">
            {/* <p className="summery-content ">
            Logical and results-driven full stack developer dedicated to
            building and optimizing user-focused websites and applications.
            Judicious and creative when crafting effective websites, apps and
            platforms to propel competitive advantage and revenue growth.
            Technically proficient and analytical problem solver with calm and
            focused demeanor.
          </p> */}
            <ReactTyped
              className="summery-content"
              strings={[
                'Logical and results-driven full stack developer dedicated to building and optimizing user-focused websites and applications. Judicious and creative when crafting effective websites, apps and platforms to propel competitive advantage and revenue growth. Technically proficient and analytical problem solver with calm and focused demeanor.',
              ]}
              typeSpeed={30}
              backSpeed={50}
              backDelay={1}
              smartBackspace
              fadeOut
            />
          </div>
        </div>
      </div>
    </Fade>
  </div>
)

export default HomeComponent

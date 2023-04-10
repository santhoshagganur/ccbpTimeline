// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-card-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-details">
        <h1 className="project-name"> {projectTitle} </h1>
        <div className="duration-container">
          <AiFillCalendar className="duration-icon" />
          <p className="duration"> {duration} </p>
        </div>
      </div>
      <p className="project-description"> {description} </p>
      <a className="project-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard

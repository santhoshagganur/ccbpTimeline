// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-container">
      <div className="course-details">
        <h1 className="course-name"> {courseTitle} </h1>
        <div className="course-icon">
          <AiFillClockCircle className="course-duration" />
          <p className="duration"> {duration} </p>
        </div>
      </div>
      <p className="description"> {description} </p>
      <div className="tags-container">
        {tagsList.map(each => (
          <p className="tag">{each.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard

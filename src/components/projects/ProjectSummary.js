import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
  return (
    <div className='card z-depth-0 project-summary'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title'><p className='project-title'>{project.title}</p></span>
        <span className='card-content grey-text darken-5'>{project.content}</span>
        <p className='card-user dark-grey-text'>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p className='grey-text'>{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary

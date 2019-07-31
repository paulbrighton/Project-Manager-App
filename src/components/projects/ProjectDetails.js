import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nesciunt vel voluptates veritatis eligendi ad dolorem nihil, enim non a earum soluta, perferendis corrupti aspernatur voluptatem amet maiores veniam molestiae.</p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div><p>Posted by Paul Brighton</p></div>
          <div><p>1st August, 11:45am</p></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

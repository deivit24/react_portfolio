import React from 'react'

import Paper from '@material-ui/core/Paper';
import ProjectModal from './ProjectModal'



const ProjectCard = ({img, stack, desc, name, url, git}) => {

  return (
    <div id="ProjectCard" style={{backgroundImage: `url(${img})`}}>
      <Paper className='project-card'  elevation={3} />
      <ProjectModal name={name} url={url} stack={stack} desc={desc} git={git}/>
    </div>
  )
}

export default ProjectCard

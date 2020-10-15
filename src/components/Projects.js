import React from 'react'
import {Grid, Container} from '@material-ui/core'
import ProjectCard from './ProjectCard'
import {projects} from './ProjectHelper'
const Projects = () => {
  return (
    <div id='Projects'>
      <h1>Projects</h1>
      <hr/>
      <Container fixed>
        <Grid container spacing={1}>
         
          
          {projects.map(project => (
            <Grid item xs={12} sm={12} md={6} >
            <ProjectCard name={project.name} img={project.img} url={project.url} stack={project.stack} desc={project.desc} git={project.git}  />
           </Grid>
          ))}
        
        </Grid>
      </Container>
    </div>
  )
}

export default Projects

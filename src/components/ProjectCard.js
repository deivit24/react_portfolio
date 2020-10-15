import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ProjectModal from './ProjectModal'
import kiken from '../img/kiken.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: 184,
    },
  },
}));
const ProjectCard = ({img, stack, desc, name, url, git}) => {

  return (
    <div id="ProjectCard" style={{backgroundImage: `url(${img})`}}>
      <Paper className='project-card'  elevation={3} />
      <ProjectModal name={name} url={url} stack={stack} desc={desc} git={git}/>
    </div>
  )
}

export default ProjectCard

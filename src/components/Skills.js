import React from 'react'
import {Grid, Container} from '@material-ui/core'
import SkillCard from './SkillCard'
import {frontendSkills, backendSkills, tools} from './SkillHelper'
const Skills = () => {
  return (
    <div id='Skills'>
      <h1>My Skills</h1>
      <hr/>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={12}  >
              <h2>Frontend</h2>
            
              <ul className="skill-set__list">
              {frontendSkills.map(skill =>(
                <SkillCard key={skill.name} name={skill.name} img={skill.img} num={skill.num} date={skill.date} />
              ))}
              </ul>  
              
        
          </Grid>
          <Grid item xs={12} >
              <h2>Backend</h2>
              <ul className="skill-set__list">
              {backendSkills.map(skill =>(
                <SkillCard key={skill.name} name={skill.name} img={skill.img} num={skill.num} date={skill.date} />
              ))}
              </ul>  
          </Grid>
          <Grid item xs={12} >
              <h2>Developer Tools</h2>
              <ul className="skill-set__list">
              {tools.map(tool =>(
                <SkillCard key={tool.name} name={tool.name} img={tool.img} num={tool.num} date={tool.date} />
              ))}
              </ul>  
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Skills

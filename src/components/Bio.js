import React from 'react'

import {Grid, Container} from '@material-ui/core'

const Bio = () => {
  return (
    <div id='Bio'>
      <h1>Who Am I</h1>
      <hr/>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={12} >
          <p className="who__text">
                  Born in McAllen, TX and was raised a tennis player. I Lived
                  in:
                </p>

                <ul className="who__list">
                  <li>Nashville - Lipscomb University BA in Accounting</li>
                  <li>New York - Assistant Men's Tennis Coach at West Point</li>
                  <li>
                    The United Kingdom - Durham University Masters in Finance
                  </li>
                  <li>St. Louis - worked at a huge financial service firm</li>
                </ul>

                <p className="who__text">
                  And these days I live in Austin, TX- started Armis Financial
                  and build Web Applications on the side.
                </p>
                <p className="who__text">
                  I fell in love with Web Development back when I was living in
                  the U.K. in 2016 and everything about it. Always learning and
                  trying to be at the forefront of new frontend and backend technologies. On January 2020, I decided to enroll the Springboard Software Development Bootcamp
                </p>
                <p className="who__text">
                  Springboard is in partnership with Rithm School and Colt
                  Steele, 700+ hour hands-on curriculum with 1:1 industry expert
                  mentor oversight, and completion of 4 portfolio projects
                  covering front-end web development, back-end web development,
                  and full-stack development. Mastering JavaScript, DOM
                  Manipulation, Git, Ajax, jQuery, Python, Flask, SQL,
                  PostgreSQL, Node, Express, React, Redux, C.S. fundamentals
                  Data Structures and Algorithms
                </p>
                <p className="who__text">
                  My goal is to work as a full-stack developer at a company that
                  needs someone like me. A guy with a different background, adept to communication, business experience and a 'I will figure it out attitude'.
                </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Bio

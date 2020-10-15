import React from 'react'
import resume from '../img/resume.pdf'
const Contact = () => {
  return (
    <div id='Contact'>
      <h1>Contact</h1>
      <hr/>
      <p className='web-link'><a href="https://github.com/deivit24"><i className="fab fa-github"></i></a> <a href="https://www.linkedin.com/in/david-a-salazar-aa6a2750/"><i className="fab fa-linkedin"></i></a><a href="https://www.facebook.com/AugieSal"><i className="fab fa-facebook"></i></a>
      <a href="https://www.instagram.com/deivit24"><i className="fab fa-instagram"></i></a></p>
            <p className="item-left ">
                <a className="email" href="mailto:david.asal@hotmail.com">david.asal@hotmail.com</a>
                <br/>
                <a className="email" href="tel:+19568676720">956.867.6720</a>
            </p>
            <div className="resume">
            <a href={resume} download >
            <i className="fas fa-download"></i>  Resume
               </a>
            </div>
    </div>
  )
}

export default Contact

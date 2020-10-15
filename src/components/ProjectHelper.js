import pickleball from '../img/pickleball.PNG'
import kiken from '../img/kiken.png'
import jobly from '../img/jobly.PNG'
import armis from '../img/armis.PNG'
import wealthmods from '../img/wealthmods.PNG'
import campgrounds from '../img/campgrounds.PNG'
import fuego from '../img/fuego.PNG'
import accelerated from '../img/accelerated.PNG'
import chuck from '../img/chuck.PNG'
import lights from '../img/lights.PNG'
import login from '../img/login.PNG'

const projects = [
  {
    name: 'Pickle Ball Pall',
    img: pickleball,
    stack: "MERN (MongoDB, Express, React & Redux, Node.js)",
    desc: 'This web application is designed to help connect pickleball players around your area. You can create a player profile, post, comment and direct message other players. You can filter players or posts by zip code or city.',
    git: 'https://github.com/deivit24/pickball_pal',
    url: 'https://dreamy-heisenberg-115bc0.netlify.app/'
  },
  {
    name: 'Kiken',
    img: kiken,
    stack: "HTML/SCSS, JavaScript, Python, Flask, PostgreSQL",
    desc: 'This was my first capstone project',
    url: 'https://kiken.herokuapp.com/',
    git: 'https://github.com/deivit24/KIKEN_CAPSTONE'
  },
  {
    name: 'Jobly',
    img: jobly,
    stack: "HTML/CSS, React, Node.js, PostgreSQL",
    desc: 'This is a full-stack application that and frontend oriented in which you can signup an view open job applications.  ',
    url: 'https://dreamy-austin-f3aff9.netlify.app/',
    git: 'https://github.com/deivit24/react-jobly'
  },
  {
    name: 'Armis Financial LLC',
    img: armis,
    stack: "HTML/CSS/SCSS, JavaScript, Bootstrap, (React in Progress)",
    desc: 'This was my first website I created and it was when I feel in love with Software Developement. I was for my Registered Investment Advisory business',
    url: 'https://armisfinancial.com/',
    git: 'https://github.com/deivit24/new-armis'
  },
  {
    name: 'Wealth MODs',
    img: wealthmods,
    stack: "HTML/CSS/SCSS, JavaScript, Bootstrap, (React in Progress)",
    desc: 'This is blog for armis financial. I am going to update it to a full-stack project to perform CRUD operations',
    url: 'https://wealthmods.com/',
    git: 'https://github.com/deivit24/wealth_mods'
  },
  {
    name: 'Fuegoleon Development',
    img: fuego,
    stack: "HTML/CSS/SCSS, React",
    desc: 'This was for my freelancing company in which I used to build websites for individuals and for small business',
    url: 'https://www.fuegoleondevelopment.com/',
    git: 'https://github.com/deivit24/react-fuegoleon'
  },
  {
    name: 'Campgrounds',
    img: campgrounds,
    stack: "HTML/CSS/SCSS, JavaScript, MongoDB and Node.js",
    desc: 'This was my first full-stack application inwhich you can upload new campgrounds and leave reviews, comment and rate. ',
    url: 'https://stormy-eyrie-86260.herokuapp.com/',
    git: 'https://github.com/deivit24/campgrounds'
  },
  {
    name: 'Accelerated Funding ',
    img: accelerated,
    stack: "Javascript and Wordpress",
    desc: 'This is a landing page for Accelerated Funding LLC. This is for a mortgage company I did work for ',
    url: 'https://acceleratedfund.com/accelerated-funding-real-estate-investment-direct-private-lender/',
    git: 'https://github.com/deivit24'
  },
  {
    name: 'Chuck Norris Jokes Generator ',
    img: chuck,
    stack: "HTML/CSS, React",
    desc: 'This a fun project I did using an API that generates chuck norris jokes.',
    url: 'https://objective-einstein-4868ac.netlify.app/',
    git: 'https://github.com/deivit24/react-chuck-norris-joke-generator'
  },
  {
    name: 'Lights Out Game',
    img: lights,
    stack: "HTML/CSS, React",
    desc: 'This a fun project I did using React to develop a fun game.',
    url: 'https://hungry-bell-3d6908.netlify.app/',
    git: 'https://github.com/deivit24/lights-_out'
  },
  {
    name: 'Cool Logins',
    img: login,
    stack: "HTML/CSS/SCSS, JavaScript",
    desc: 'This a fun project to showcase my UI skills in building login/sign up mock ups',
    url: 'https://silly-heisenberg-cbe39c.netlify.app/',
    git: 'https://github.com/deivit24/cool-log-in-forms'
  },
]




export { projects }
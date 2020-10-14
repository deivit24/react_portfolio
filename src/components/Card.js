import React, {useEffect, useState} from 'react'
import axios from 'axios'

const BASE_URL = 'https://api.github.com/users'
const Card = ({username}) => {
const [user, setUser] = useState({})
  useEffect(() => {
    
   const getUser = async (username)  => {
    const res = await axios.get(`${BASE_URL}/${username}`)
    setUser(res.data)
    
   }
   getUser(username);
   
  }, [username])

  return (
    <div id='Card'>
    <div className="img">
    <img src={user.avatar_url} alt=""/>
    </div>
     <div className="info">
     <h1 className='name'>{user.name}</h1>
      <p className='bio'>{user.bio}</p>
      <p className='
      location'><i className="fas fa-map-marker-alt"></i> {user.location}</p>
      <hr/>
      <p className='skills'>Expert in React.js , JavaScript, Node.js, Python/Flask, MongoDB, Postgres</p> 
      <p className='skills'>Always at the forefront of JavaScript Technologies</p>
     </div>
    </div>
  )
}

export default Card

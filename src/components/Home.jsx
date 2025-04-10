import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../App'
import { Link } from 'react-router-dom';

function Home() {
  const [error,setError] = useState('');
  const [user,setUser] = useState('');


  const getUser = async()=>{
    try {
      const res = await axios.get(`${BASE_URL}/profile`,{
        withCredentials:true
      })
      console.log(res.data.user)
     setUser(res.data?.user);
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }
 
  useEffect(()=>{
    getUser();
  },[])
    
  return (
    <div>
      <Link to={'/login'} className='bg-blue' >Login</Link>
        <div>
          <h1>email : {user.user_email}</h1>
          {error && (<div>
            {error}
          </div>)}
        </div>
    </div>
  )
}

export default Home
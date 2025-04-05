import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../App'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

function Home() {
  const [error,setError] = useState('');

  const getUser = async()=>{
    try {
      const cookie = Cookies.get('token');
      console.log(cookie)
      const res = await axios.get(`${BASE_URL}/profile`,{
        withCredentials:true
      })
      console.log(res.data.user);
    } catch (error) {
      setError(error.message)
    }
  }
  getUser();
    
  return (
    <div>
      <Link to={'/login'} className='bg-blue' >Login</Link>
        <h2>{error?error:"Welcome to the profile"}</h2>
    </div>
  )
}

export default Home
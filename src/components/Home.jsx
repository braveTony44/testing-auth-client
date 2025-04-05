import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../App'
import Cookies from 'js-cookie';

function Home() {
  const [error,setError] = useState('');

  const getUser = async()=>{
    const cookie = Cookies.get('token');
    console.log(cookie)
    const res = await axios.get(`${BASE_URL}/profile`,{
      withCredentials:true
    })
    console.log(res);
  }
  getUser();
    
  return (
    <div>
        <h2>{error?error:"Welcome to the profile"}</h2>
    </div>
  )
}

export default Home
// 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
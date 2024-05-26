import React from 'react'
import Heading from '../Components/Heading'
import Inputbox from '../Components/Inputbox'
import Button from '../Components/Button'
import axios from 'axios'
import { useState } from 'react'
function Signin() {
  const [username,setusername]= useState('');
  const [password,setpassword] = useState('');
  return (
    <div className='bg-slate-900'>
    <div className='flex flex-row items-center justify-center min-h-screen'>
 
    <div className='bg-slate-100 p-20 rounded-lg shadow-xl shadow-black '>
    <div className='flex flex-col items-center '> 
        <Heading label={"Sign in"}/>
        
        <Inputbox placehold={"Username"}  onChange={(e)=>setusername(e.target.value)}/>
        <Inputbox placehold={"Password"} onChange={(e)=>setpassword(e.target.value)} />
        <Button onClick={async(e)=>{
          const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
            username:username,
            password:password
          })
          localStorage.setItem("token",response.data.Token);
        }} label={"Sign in"}/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Signin
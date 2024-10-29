import React, { useState } from 'react'
import Inputbox from '../Components/Inputbox'
import Button from '../Components/Button'
import Heading from '../Components/Heading'
import axios from 'axios'
function Singnup() {
  const [fnam,setfname]=useState();
  const [lname,setlname]=useState();
  const [username,setusername]=useState();
  const [password,setpassword]=useState();

  return (
    <div className='bg-slate-900'>
    <div className='flex flex-row items-center justify-center min-h-screen'>
 
    <div className='bg-slate-100 p-20 rounded-lg shadow-xl shadow-black '>
    <div className='flex flex-col items-center '> 
        <Heading label={"Sign Up"}/>
        <Inputbox onChange={(e)=>{
          setfname(e.target.value)
        }} placehold={"Firstname"} />
        <Inputbox  onChange={(e)=>{
          setlname(e.target.value)
        }} placehold={"Lastname"}/>
        <Inputbox placehold={"Username"}  onChange={(e)=>{
          setusername(e.target.value)
        }} />
        <Inputbox placehold={"Password"}   onChange={(e)=>{
          setpassword(e.target.value)
        }}/>
       
        <Button onClick={async(e)=>{


            const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
              username:username,
              password:password,
              firstname:fnam,
              lastname:lname
            })
            console.log(response);
        }} label={"Sign in"}/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Singnup
import React from 'react'
import Heading from '../Components/Heading'
import Inputbox from '../Components/Inputbox'
function Signin() {
  return (
    <div className='flex flex-row items-center justify-center min-h-screen'>
 
    <div className='bg-slate-600 p-20 rounded-lg'>
    <div className='flex flex-col items-center '>
        <Heading label={"Sign in"}/>
        <Inputbox placehold={"Name"}  />
        <Inputbox placehold={"LastName"}  />
        <Inputbox placehold={"Username"}  />
        <Inputbox placehold={"Password"}  />
        </div>
    </div>
    </div>
  )
}

export default Signin
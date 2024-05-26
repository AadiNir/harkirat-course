import React from 'react'
import Inputbox from '../Components/Inputbox'
import Button from '../Components/Button'
import Heading from '../Components/Heading'

function Singnup() {
  return (
    <div className='bg-slate-900'>
    <div className='flex flex-row items-center justify-center min-h-screen'>
 
    <div className='bg-slate-100 p-20 rounded-lg shadow-xl shadow-black '>
    <div className='flex flex-col items-center '> 
        <Heading label={"Sign Up"}/>
        <Inputbox placehold={"Firstname"} />
        <Inputbox placehold={"Lastname"}/>
        <Inputbox placehold={"Username"}  />
        <Inputbox placehold={"Password"}  />
        <Button label={"Sign in"}/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Singnup
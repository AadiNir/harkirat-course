import React from 'react'
import Heading from '../Components/Heading'
import Inputbox from '../Components/Inputbox'
import Button from '../Components/Button'
function Sendmoney() {
  return (
    <div className='bg-slate-900'>
    <div className='flex flex-row items-center justify-center min-h-screen'>
 
    <div className='bg-slate-100 p-20 rounded-lg shadow-xl shadow-black '>
    <div className='flex flex-col items-center '> 
        <Heading label={"Transaction"}/>
        <Heading label={"To username"}/>
        <Inputbox placehold={"name"}  />
        <Heading label={"Amount"}/>
        <Inputbox placehold={"$$"}  />
        <Button label={"Sign in"}/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Sendmoney
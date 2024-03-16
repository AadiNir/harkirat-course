import { memo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Effecttrain from './Components/Effecttrain'
import Memotrain from './Components/Memotrain'
import Usereftrain from './Components/Usereftrain'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Contexttry from './Components/Contexttry'

const MainPage=()=>{
  return(
    <h1>Main page bro</h1>
  )
}
const HandlePage=()=>{
  return(
    <h1>Handle Page bro</h1>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const handlepage=()=>{
    window.location.href='handle'
  }
  return (
    <>
      {/* <BrowserRouter>
        <Routes>

          <Route path='/' element={<MainPage/>}/>
          <Route path='/handle' element={<HandlePage/>}/>
        </Routes>
      </BrowserRouter>
      <button onClick={handlepage}>Click for route</button>
      <Effecttrain/>
      <Memotrain/>
      <Usereftrain/> */}
      <Contexttry/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Effecttrain from './Components/Effecttrain'
import Memotrain from './Components/Memotrain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Effecttrain/> */}
      <Memotrain/>
    </>
  )
}

export default App

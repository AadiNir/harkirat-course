import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Effecttrain from './Components/Effecttrain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Effecttrain/>
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Signin from './Pages/Signin'
import Singnup from './Pages/Singnup'
import Sendmoney from './Pages/Sendmoney'
import Dashboard from './Pages/Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element = {<Signin/>}/>
        <Route path="/signup" element = {<Singnup/>}/>
        <Route path="/dashboard" element = {<Dashboard/>}/>
        <Route path="/send" element = {<Sendmoney/>}/>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App

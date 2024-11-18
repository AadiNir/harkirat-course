import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Atomfamily from './Components/Atomfamily'
import Effecttrain from './Components/Effecttrain'
import Memotrain from './Components/Memotrain'
import Usereftrain from './Components/Usereftrain'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Contexttry from './Components/Contexttry'
import Recoiltry from './Components/Recoiltry'
import { RecoilRoot } from 'recoil'
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
let renrender = 0;

function App() {
  const [count,setcount]=useState(0);
  const incremenet = useCallback(function(){
    setcount(count+1);
  },[])
  const decrement = useCallback(function(){
    setcount(count-1);
  })
  const clickfunc = useCallback(function(val){
    alert(val);
  },[])
  const [val, setVal] = useState(""); // State for input value
  const handleChange = (e) => {
    setVal(e.target.value); // Update state on input change
  };
  renrender+=1;
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
      {/* <Contexttry/> */}
      {/* <RecoilRoot>

      <Recoiltry/>
      </RecoilRoot> */}
        <div>The factorial is </div>
        <div>The component has rerendered {renrender}</div>
        <div>
      <input
        type="text"
        onChange={handleChange} // Separate input handling
        value={val} // Controlled input
      />
    </div>
    </>
  )
}
const Inputfield = memo(({ clickfunc }) => {
  console.log("Inputfield rendered");

  const [val, setVal] = useState(""); // State for input value

  const handleChange = (e) => {
    setVal(e.target.value); // Update state on input change
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange} // Separate input handling
        value={val} // Controlled input
      />
      <button onClick={() => clickfunc(val)}>Click Me</button>
    </div>
  );
});

export default App

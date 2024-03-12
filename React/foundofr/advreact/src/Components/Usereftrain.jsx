import React, { useEffect,useRef,useState } from 'react'

function Usereftrain() {
    const [val,setval] = useState(Number(100));
    const id = useRef();
    useEffect(()=>{
        setTimeout(()=>{
            id.current.innerHTML = 2000;
        },5000)
    },[])
  return (
    <div ref={id}>{val}</div>
  )
}

export default Usereftrain
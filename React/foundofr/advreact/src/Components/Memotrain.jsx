import React, { useEffect } from 'react'
import { memo,useMemo,useState,useCallback } from 'react'

function Memotrain() {
  const [fact,setfact]= new useState(Number(0)); 
  const [ans,setans] = new useState(Number(0));
  const factca = useMemo(()=>{
    let k =1;
    for(let i=1;i<fact;i++){
        k=k*i;
    }
    setans(k);
  },[fact])
  return (
    <div>
    Memotrain
    <input onChange={(e)=>setfact(e.target.value)} placeholder='enter the input factorial'/>
    <h1>{ans}</h1>
    <input onChange={(e)=>setans(e.target.value)} placeholder='enter the input factorial'/>

    </div>
  )
}
// const Demo = memo(function({a}){
//   console.log("rerender");

// })

export default Memotrain
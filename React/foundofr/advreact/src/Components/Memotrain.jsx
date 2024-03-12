import React, { useEffect } from 'react'
import { memo,useMemo,useState,useCallback } from 'react'

function Memotrain() {
  const [id,setid]= new useState(Number(0));
  const [bank1,setbank1] = new useState(Number(0));
  const [bank2,setbank2] =new useState(Number(0));
  
  // const a = useCallback(function(){
  //   return(
  //     <h1>Hey there</h1>
  //   )
  // },[])
  useEffect(()=>{
    setbank1(30);
    console.log("cred1");
  },[])
  useEffect( ()=>{
    setbank2(300);
    console.log("cred2");
  },[])

  useEffect(()=>{
    console.log("end credit");
  },[id])

  const g = useMemo(()=>{
     setbank2(bank1+bank2);
    return bank2;
  },[])

  return (
    <div>
    Memotrain
    <button onClick={()=>{setid(id+1)}}>the value{id}</button>
    {/* <Demo a={id} /> */}
    <h1>{g}</h1>
    </div>
  )
}
// const Demo = memo(function({a}){
//   console.log("rerender");

// })

export default Memotrain
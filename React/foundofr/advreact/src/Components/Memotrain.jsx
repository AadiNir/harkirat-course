import React from 'react'
import { memo,useMemo,useState,useCallback } from 'react'

function Memotrain() {
  const [id,setid]= new useState(Number(0));
  const a = useCallback(function(){
    return(
      <h1>Hey there</h1>
    )
  },[])
  return (
    <div>
    Memotrain
    <button onClick={()=>{setid(id+1)}}>the value{id}</button>
    <Demo a={id} />
    </div>
  )
}
const Demo = memo(function({a}){
  console.log("rerender");

})

export default Memotrain
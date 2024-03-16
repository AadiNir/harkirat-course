import React from 'react'

function Contexttry() {
  return (
    <div>Contexttry</div>
  )
}

function countredner(){
    return(
        <div>
            {count}
        </div>
    )
}

function Buttons(){
    return(
        <div >
        <button> onClick={()=>setcount(count+1)}Increasing</button>
        <button onClick={()=>setcount(count-1)}>decreasing</button>
        </div>
    )
}

export default Contexttry
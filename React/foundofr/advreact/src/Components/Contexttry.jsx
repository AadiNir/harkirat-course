import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { countatom,evenselector } from '../store/atoms/count'

function Contexttry() {
  return (
    <div>
    <RecoilRoot>
        <Countredner/>
        <Buttons />
        <Itiseven/>
    </RecoilRoot>
    </div>
  )
}

function Countredner(){
    const count = useRecoilValue(countatom);
    return(
        <div>
            {count}
        </div>
    )
}
function Itiseven(){
    const iseven = useRecoilValue(evenselector);

    return(

        <div>
            {(iseven)?<h1>it's even</h1>:<h1>it's odd</h1>}
        </div>
    )
}

function Buttons(){
    const[count,setcount] = useRecoilState(countatom);
    return(
        <div >
        <button onClick={()=>setcount(count+1)}> Increasing</button>
        <button onClick={()=>setcount(count-1)}>decreasing</button>
        </div>
    )
}

export default Contexttry
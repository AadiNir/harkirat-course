import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { countatom } from '../store/atoms/count'

function Contexttry() {
  return (
    <div>
    <RecoilRoot>
        <Countredner/>
        <Buttons />
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
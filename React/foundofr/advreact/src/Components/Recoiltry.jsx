import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { defsec, job, messagings, mynetwork, notifcation } from './linkedstate'

function Recoiltry() {
    const net=useRecoilValue(defsec)
    const setnet=useSetRecoilState(mynetwork)
    const jo=useRecoilValue(job)
    const mes=useRecoilValue(messagings)
    const not=useRecoilValue(notifcation)
    
  return (

    <div>
        <button>My network ({net})</button>
        <button>Jobs ({jo})</button>
        <button>Messaging ({mes})</button>
        <button>Notifcation ({not})</button>
        <button onClick={()=>setnet(net+1)}>press me</button>
    </div>

  )
}

export default Recoiltry
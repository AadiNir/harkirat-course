import React from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { defsec, job, messagings, mynetwork, notifcation } from './linkedstate'

function Recoiltry() {
    const net=useRecoilValue(defsec)
    const jo=useRecoilValue(job)
    const mes=useRecoilValue(messagings)
    const not=useRecoilValue(notifcation)
    
  return (

    <div>
        <button>My network ({net})</button>
        <button>Jobs ({jo})</button>
        <button>Messaging ({mes})</button>
        <button>Notifcation ({not})</button>
    </div>

  )
}

export default Recoiltry
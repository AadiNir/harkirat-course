import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { defsec, getnotification } from './linkedstate'

function Recoiltry() {
   const notobj = useRecoilValue(getnotification);
    
  return (

    <div>
        <button>My network ({notobj.network})</button>
        <button>Jobs ({notobj.jobs})</button>
        <button>Messaging ({notobj.messaging})</button>
        <button>Notifcation ({notobj.notifications})</button>
        <button onClick={()=>setnet(notobj.network+1)}>press me</button>

    </div>

  )
}

export default Recoiltry
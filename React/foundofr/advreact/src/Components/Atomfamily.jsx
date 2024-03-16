import React from 'react'
import { RecoilRoot, atomFamily, useRecoilValue } from 'recoil'
const Todos =[
    {
        id:1,
        name:"Aadithya Niranjan"
    },
    {
        id:2,
        name:"Varun V"
    }
]
const dyatomicfamily = atomFamily({
    key:"dyatomicfamily",
    default: id=>{
        return Todos.find( x => x.id===id)
    },
})
function Atomfamily() {
  return (
    <div>
    <h1>hi hello </h1>
    <RecoilRoot>
        <Todocomponent id={1}/>
    </RecoilRoot>

    </div>
  )
}
function Todocomponent({id}){
    const k = useRecoilValue(dyatomicfamily(id));

    return(
        <div>
        <h1>{k.id}</h1>
        <h2>{k.name}</h2>
        </div>
    )
}
export default Atomfamily
import Heading from "./Heading"
import Button from "./Button"
import { Link } from "react-router-dom"
import Sendmoney from "../Pages/Sendmoney"
export default function Card({Name}){
    return (
    <div className='flex justify-center p-2'>
  
    <div className='flex justify-between  border-2 w-1/2 rounded-2xl border-gray-600'>
  
      <Heading label={Name}/>
      <Button onClick={()=>{
        <Sendmoney/>
      }} label={"send"} />
    </div>
    </div>
    )
}
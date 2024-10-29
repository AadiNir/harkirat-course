import React,{useState} from 'react'
import Button from '../Components/Button'
import Card from '../Components/Card'
import axios from 'axios'
function Dashboard() {  
  const [find,setfind]=useState('');

  const [data,setData]=useState([]);
  return (
    <div>
    <div className='p-5 flex justify-center '>
      <input placeholder='enter the name of the user' className='p-2 w-1/2 border-2 rounded-lg border-stone-800' onChange={(e)=>{
        setfind(e.target.value);
      }}/>
      <Button onClick = {async(e)=>{
        const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${find}`);
        setData(response.data);
      }} label={"search"}/>
    </div>
    {data.map(user=>{
      {/* console.log(user.username); */}
      return <Card Name={user.username}/>
    })}
    </div>
  )
}

export default Dashboard
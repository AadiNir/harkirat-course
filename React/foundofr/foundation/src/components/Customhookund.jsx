import React,{useState,useEffect} from 'react'
import axios from 'axios';
function useTodo(){
    const [todo,settodo]=useState([]);
    useEffect( ()=>{
         axios.get('https://sum-server.100xdevs.com/todos').then(response=>settodo(response.data.todos)).catch((err)=>console.log(err));
    },[])
    return todo;
}

function useOnline(){
    const [set,useset]=useState(false);
    useEffect(()=>{
        setInterval(()=>{
            useset(window.navigator.onLine);
        },1000)
        
    },[]);
   
}
function Customhookund() {
    const k = useTodo();
    const p = useOnline();
  return (
    <div>
    {k.map(todo => 
    <div>
        {todo.title}
    </div>)}
    </div>
  )
}

export default Customhookund
import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
function Effecttrain() {
    const [data, setData] = useState("");
    const [error, setError] = useState(null);
    const [id,setid]=useState("2");

    useEffect(() => {
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            .then((res) => {
                setData(res.data.todo);
                
            })
            .catch((error) => {
                setError(error.message);
            });
    }, [id]);

    return (
        <div>
            {/* <input type='text' placeholder='enter the id of todo list u want to retrive'></input> */}
            <button onClick={(e)=>setid("1")}>1</button>
            <button onClick={(e)=>setid("2")}>2</button>
            <button onClick={(e)=>setid("3")}>3</button>
            <button onClick={(e)=>setid("4")}>4</button>

            <h1>These are</h1>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <Todo title={data.title} des={data.description}/>
            )}
        </div>
    );
}
function Todo({title,des}){
    return(
        <>
        <h1>{title}</h1>
        <p>{des}</p>
        </>
    )

}

export default Effecttrain;

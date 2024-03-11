import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
function Effecttrain() {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        axios.get(`https://sum-server.100xdevs.com/todo?id=1`)
            .then((res) => {
                setData(res.data.todo);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    return (
        <div>
            <h1>These are</h1>
           {
                <p>{data || "Loading..."}</p>
            }
        </div>
    );
}

export default Effecttrain;

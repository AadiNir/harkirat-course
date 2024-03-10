import React, { useState } from 'react';

function Todo() {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [tempdat, setTempdat] = useState([]);

    function createWork(e) {
        e.preventDefault();
        setTempdat(prevState => [
            ...prevState,
            {
                "title": title,
                "description": des
            }
        ]);
        // Clear input fields after adding the todo
        setTitle("");
        setDes("");
    }

    return (
        <div>
            <input placeholder='Enter your job title' value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
            <input placeholder='Enter your job description' value={des} onChange={(e) => { setDes(e.target.value) }}></input>
            <button onClick={(e) => createWork(e)}>Confirm your to-do list</button>
            {/* Display todos */}
            <div>
                {tempdat.map((val, index) => (
                    <div key={index}>
                        <h1>{val.title}</h1>
                        <h2>{val.description}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Todo;

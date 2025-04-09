import React, { useState } from "react";

export default function Todo() {
    const [list, setList] = useState([]); 
    const [newTask, setNewTask] = useState(""); 

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleClick = () => {
        if (newTask.trim() === "") return; 
        setList([...list, newTask]);
        setNewTask(""); 
    };

    const handleDelete = (index) => {
        const updatedList = list.filter((_, idx) => idx !== index); // Xóa phần tử theo index
        setList(updatedList);
    };

    return (
        <>
            <h1>Todo App</h1>
            <input
                type="text"
                value={newTask}
                onChange={handleChange}
                placeholder="Nhập công việc mới vào"
            />
            <button onClick={handleClick}>Thêm</button>

            <ul>
                {list.map((task, index) => (
                    <ol key={index}>
                        {task}
                        <button onClick={() => handleDelete(index)}>x</button>
                    </ol>
                ))}
            </ul>
        </>
    );
}

import { React } from "react";
import { useState } from "react";
import './InputTask.css';


export function InputTask({ addTask }) {
    const [newTask, setNewTask] = useState("");
   


    const handleInputChange = (e) => {
        setNewTask(e.target.value)
    };

    const handleAddTask = () => {
        if (newTask === '') {
            return <p>add a task</p>
        } else {
            
                addTask(newTask);
                setNewTask("");
            
            
        }
    };
    
    return (
    <> 
        <input type="text" value={newTask} onChange={handleInputChange} />
    <button onClick={handleAddTask}>Add Task</button>
    </>
    );

}
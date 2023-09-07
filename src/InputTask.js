import { React } from "react";
import { useState } from "react";
import './InputTask.css';


export function InputTask({ addTask }) {
    const [newTask, setNewTask] = useState("");
    const [warning, setWarning] = useState(null); // new state for the warning message

   


    const handleInputChange = (e) => {
        setNewTask(e.target.value);
        setWarning(null);

    };

    const handleAddTask = (e) => {
        e.preventDefault(); // Prevent the form's default submission behavior
        if (newTask === '') {
            setWarning('Please add a task'); // Set the warning message
        } else {
            
                addTask(newTask);
                setNewTask("");
            }
    };
    
    return (
   <form onSubmit={handleAddTask}>
<input type="text" value={newTask} onChange={handleInputChange} />
    <button type="submit">Add Task</button>
    {warning && <p>{warning}</p>}
   </form>

        );

}
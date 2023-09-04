import { React } from "react";
import { useState } from "react";
import './InputTask.css';


export function InputTask() {
    const [newTask, setNewTask] = useState("");
    const [todoList, setTodoList] = useState([]);


    const handleInputChange = (e) => {
        setNewTask(e.target.value)
    };

    const addTask = () => {
        setTodoList([...todoList, newTask] );
        setNewTask("");
    };

    const removeTask = (taskName) => {
        setTodoList(todoList.filter((task) => task !== taskName));
    }

    const completedTask = () => {
        setTodoList(todoList.map((task) => {
            return 
        }))
    }
    
    
    return (
    <> 
        <input type="text" value={newTask} onChange={handleInputChange} />
    <button onClick={addTask}>Add Task</button>
    <div className="taskContainer">
        <ol>
    {todoList.map((task, index) => {
     return (
     <div className="list">
     <li className="task" key={index}>{task}</li>
     <button onClick={() => completedTask(task)}>Completed</button> 
     <button onClick={() => removeTask(task)}>Remove Task</button>
     </div>
     );
    })}
    </ol>
    </div>
    </>
    );

}
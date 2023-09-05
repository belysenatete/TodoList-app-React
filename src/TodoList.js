import { React } from "react";

export function TodoList({ todoList, removeTask, completeTask }) {
    
return (
  
<div className="taskContainer">
        <ol>
    {todoList.map((task, index) => {
     return (
     <div className="list">
     <li className="task" key={index} 
     style={{ backgroundColor: task.completed ? 'green' : 'yellow' }}>
        {task.name}
        </li>
     <button onClick={() => completeTask(task.id)}>Complete</button> 
     <button onClick={() => removeTask(task.id)}>Remove Task</button>
     </div>
     );
    })}
    </ol>
    </div>
    

);


}
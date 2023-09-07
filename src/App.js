import { React } from "react";
import { InputTask } from './InputTask.js';
import { TodoList } from "./TodoList.js";
import { useState } from "react";
import './App.css';
  

function App() {
  const [todoList, setTodoList] = useState([]);
  const [taskId, setTaskId] = useState(0);  // new state to hold unique id
const addTask = (newTask) => {
    setTodoList([...todoList, { id: taskId, name: newTask }]);
    
  setTaskId(taskId + 1);  // increment the id for the next task
};

const removeTask = (taskIdToRemove) => {
        setTodoList(todoList.filter((task) => task.id !== taskIdToRemove));
    };

const completeTask =(taskidtocomplete) => {
    setTodoList(todoList.map((task) => {
if (task.id === taskidtocomplete) {
  return {...task, completed: !task.completed};
}
return task;
    }))
}


  return <div className="App">
  <InputTask addTask={addTask} />
            <TodoList 
            todoList={todoList} 
            removeTask={removeTask} 
            completeTask={completeTask}
            />
  </div>
}
  



export default App;

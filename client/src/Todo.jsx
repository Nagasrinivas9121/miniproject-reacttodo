import { useState } from "react";

function Todo() {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

function addTask() {
    if(task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
}
function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
}
    
    return(
        <div>
            <h2>Todo List</h2>
            <input type="text" placeholder="Enter task" value={task} onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>

            <ul>
              {tasks.map((t, index) => (
                <li key={index}>
                    {t}
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
              ))}
            </ul>
        </div>
    );
}

export default Todo;
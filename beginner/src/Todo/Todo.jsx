import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Add or Update Task
  function addTask() {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }

    setTask("");
  }

  // Delete Task
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  // Edit Task
  function editTask(index) {
    setTask(tasks[index]);
    setEditIndex(index);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <ol>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}{" "}
            <button onClick={() => editTask(index)}>Edit</button>{" "}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
import { useState } from "react";
import { nanoid } from "nanoid";

export default function TodoForm(props) {
  const [task, setTask] = useState("");

  function handleTask(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      task: task,
      id: nanoid(),
      do: false
    };
    props.addTask(newTask);
    setTask("");
  }
  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleTask}
          value={task}
          placeholder="Add new task..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

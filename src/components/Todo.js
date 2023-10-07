import Todos from "./Todos";
import { useState } from "react";
import TodoForm from "./TodoForm";

export default function Todo() {
  const [taskList, setTaskList] = useState([]);

  function addTask(task) {
    setTaskList([...taskList, task]);
  }

  function removeTask(track) {
    const updatedTaskList = taskList.filter(function (task) {
      return task.id !== track.id;
    });
    setTaskList(updatedTaskList);
  }

  function toggleDo(track) {
    const updatedTaskList = taskList.map(function (task) {
      if (task.id === track.id) {
        task.played = !task.played;
        return task;
      } else {
        return task;
      }
    });
    setTaskList(updatedTaskList);
  }
  return (
    <div>
      <ul>
        {taskList.map((task) => (
          <Todos
            key={task.id}
            task={task}
            removeTask={removeTask}
            toggleDo={toggleDo}
          />
        ))}
      </ul>
      <TodoForm addTask={addTask} />
    </div>
  );
}

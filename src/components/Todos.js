import "../styles.css";
import { useContext, useState } from "react";
import { InventoryContext } from "../data/InventoryContext";
import Todo from "./Todo";
export default function Todos() {
  const { taskList, removeTask, toggleDo } = useContext(InventoryContext);

  function handleDelete(task) {
    removeTask(task);
  }
  function handleStatusChange(task) {
    toggleDo(task);
  }
  return (
    <ul>
      {taskList.map((t) => (
        <Todo
          key={t.id}
          task={t}
          handleDelete={() => handleDelete(t)}
          handleStatusChange={() => handleStatusChange(t)}
        />
      ))}
    </ul>
  );
}

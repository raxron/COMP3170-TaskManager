import { useState, useContext } from "react";
import { InventoryContext } from "../data/InventoryContext";

import "../styles.css";

export default function TodoForm() {
  const { taskList, handleSubmit, handleTask, editing, task } =
    useContext(InventoryContext);

  if (editing !== "new") {
    initialData = taskList.find((t) => t.id === editing);
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

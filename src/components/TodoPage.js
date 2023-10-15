import "../styles.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import {useState} from "react";
import {InventoryContext} from "../data/InventoryContext";
import { nanoid } from "nanoid";

export default function TodoPage(){
  const [taskList, setTaskList] = useState([]);
  const [editing, setEditing] = useState(null);
const [task,setTask] = useState("");
  function addTask(task) {
    setTaskList([...taskList, task]);
    setEditing (null);
  }

  function removeTask(task) {
    setProducts(
      taskList.map(function (t) {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
    setEditing(null);
  }

  function toggleDo(track) {
    const updatedTaskList = taskList.map(function (task) {
      if (task.id === track.id) {
        task.finished = !task.finished;
        return task;
      } else {
        return task;
      }
    });
    setTaskList(updatedTaskList);
  }

  function updatedTask(task) {
    setTaskList(
      taskList.map(function (t) {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      }),
    );
    setEditing(null);
  }

  function handleTask(e, field) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      task: task,
      id: nanoid(),
      do: false,
    };
    if (editing === "new") {
      addTask(newTask);
      setTask("");
    } else updatedTask(task);
  }
  return(
        <div>
            <InventoryContext.Provider
                value = {{
                    task,
                    taskList,
                    addTask,
                    removeTask,
                    toggleDo,
                    updatedTask,
                    editing,
                    setEditing,
                    handleSubmit,
                    handleTask
                }}>
             {!editing ? (
                 <>
                  <Todos/>
                      <button
                      onClick={() => setEditing("new")}
                      >
                      Add Task
                     </button>
                </>
                ) : (
                    <TodoForm/>
                    )}
            </InventoryContext.Provider>
        </div>
  )
}
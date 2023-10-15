import { useContext } from "react";
import "../styles.css";
import { InventoryContext } from "../data/InventoryContext";

export default function Todo() {
  const { task } = useContext(InventoryContext);

  return (
    <li className="task">
      <div>
        <p>
          <span>
            <input type="checkbox" value={task.value} />
            {task}
          </span>
        </p>
      </div>
      <div>
        <button onClick="">Edit</button>
        <button onClick="">Remove</button>
      </div>
    </li>
  );
}

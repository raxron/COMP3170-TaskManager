export default function Todos(props) {
  const task = props.task;

  function handleDelete() {
    props.removeTask(task);
  }
  function handleStatusChange() {
    props.toggleDo(task);
  }
  return (
    <li className="task">
      <div>
        <p>
          <span>
            <input
              type="checkbox"
              onChange={handleStatusChange}
              value={task.value}
            />
            {task.played ? <del>{task.task}</del> : task.task}
          </span>
        </p>
      </div>

      <button onClick={handleDelete}>Remove</button>
    </li>
  );
}

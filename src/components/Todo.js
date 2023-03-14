import App from "../App";
import "./Todo.css";
import { CheckIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";

function Todo(props) {
  return (
    <div className="todo-item">
      <h1 className="todo-name">{props.title}</h1>
      <div className="actions">
        <button type="submit" className="check-button">
          <CheckIcon className="check-icon"></CheckIcon>
        </button>
        <button type="submit" className="x-button">
          <XMarkIcon className="x-icon"></XMarkIcon>
        </button>
      </div>
    </div>
  );
}

export default Todo;

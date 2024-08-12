import { Button } from "./Button";
import { Input } from "./Input";

export const Li = ({ task, handleToggleItem, handleDeleteTask, onChange }) => {
  return (
    <li>
      <label htmlFor="">
        <Input
          type="checkbox"
          className="form-check-input"
          checked={task.completed}
          onChange={() => handleToggleItem(task.title)}
        />
        {task.title}
      </label>
      <Button
        onClick={() => handleDeleteTask(task.title)}
        className={"btn-sm btn-outline-danger justify-content-end"}
      >
        Delete
      </Button>
    </li>
  );
};

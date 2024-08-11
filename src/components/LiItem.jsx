import { Button } from "./Button";
import { Input } from "./Input";

export const Li = ({ task }) => {
  return (
    <li>
      <label htmlFor="">
        <Input
          type="checkbox"
          className="form-check-input"
          checked={task.completed}
        />
        {task.title}
      </label>
      <Button btnStyle={"btn-sm btn-outline-danger justify-content-end"}>
        Delete
      </Button>
    </li>
  );
};

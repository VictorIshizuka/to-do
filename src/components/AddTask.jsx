import { Button } from "./Button";

export const AddTask = () => {
  return (
    <form>
      <h4>Add Task</h4>
      <input className="form-control" placeholder="Add task" type="text" />
      <Button className="btn btn-secondary w-100 mt-2">Add to list</Button>
    </form>
  );
};

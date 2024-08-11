import { useRef, useState } from "react";
import { Button } from "./Button";

export const AddTask = ({ handleAddTask }) => {
  const [text, setText] = useState("");
  const textInput = useRef();
  const handleSubmit = e => {
    e.preventDefault();
    if (!text) {
      return alert("Please add a task");
    }
    handleAddTask({ title: text, completed: false });
    setText("");
    textInput.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add Task</h4>
      <input
        className="form-control"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add task"
        ref={textInput}
        type="text"
      />
      <Button className="btn btn-secondary w-100 mt-2">Add to list</Button>
    </form>
  );
};

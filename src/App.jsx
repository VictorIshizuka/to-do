import { useState } from "react";

import { initialItems } from "./data/initialItens";

import { AddTask } from "./components/AddTask";
import { CountDone } from "./components/CountDone";
import { GroupButtons } from "./components/GroupButtons";
import { Li as Task } from "./components/LiItem";
import { Ul as List } from "./components/Ul";
import { Select } from "./components/Select";

function App() {
  const [tasks, setTasks] = useState(initialItems);

  function handleAddTask(newTask) {
    setTasks(oldTasks => [...oldTasks, newTask]);
  }

  function handleDeleteTask(title) {
    const newList = tasks.filter(item => item.title !== title);
    setTasks(newList);
  }

  function handleRemoveAllTasks() {
    setTasks([]);
  }

  function handleResetToInitial() {
    setTasks(initialItems);
  }

  function handleMarkAllIncomplete() {
    setTasks(prevTasks =>
      prevTasks.map(item => ({ ...item, completed: false }))
    );
  }
  function handleMarkAllComplete() {
    setTasks(prevTasks =>
      prevTasks.map(item => ({ ...item, completed: true }))
    );
  }

  function handleToggleItem(title) {
    setTasks(prevItems => [
      ...prevItems.map(item =>
        item.title === title ? { ...item, completed: !item.completed } : item
      ),
    ]);
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">TO-DO List</h1>

        <div className="col-8">
          <CountDone />
          <Select />

          <List>
            {tasks.map((task, index) => {
              return (
                <Task
                  key={index}
                  task={task}
                  handleToggleItem={handleToggleItem}
                  handleDeleteTask={handleDeleteTask}
                />
              );
            })}
          </List>
        </div>
        <div className="col-4">
          <AddTask handleAddTask={handleAddTask} />
          <GroupButtons
            handleRemoveAllTasks={handleRemoveAllTasks}
            handleResetToInitial={handleResetToInitial}
            handleMarkAllIncomplete={handleMarkAllIncomplete}
            handleMarkAllComplete={handleMarkAllComplete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useMemo, useState } from "react";

import { initialItems } from "./data/initialItens";

import { AddTask } from "./components/AddTask";
import { CountDone } from "./components/CountDone";
import { GroupButtons } from "./components/GroupButtons";
import { Li as Task } from "./components/LiItem";
import { Ul as List } from "./components/Ul";

function App() {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));

  const [tasks, setTasks] = useState(() => {
    return tasksFromLocalStorage || initialItems;
  });
  const [sortBy, setSortBy] = useState("default");

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

  const isCompletedTask = tasks.filter(item => item.completed !== false);

  function handleSelect(e) {
    setSortBy(e.target.value);
  }
  const sortTasks = useMemo(
    () =>
      [...tasks].sort((a, b) => {
        if (sortBy === "completed") {
          return b.completed - a.completed;
        } else if (sortBy === "not-completed") {
          return a.completed - b.completed;
        }
        return 0;
      }),
    [sortBy, tasks]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">TO-DO List</h1>

        <div className="col-8">
          <CountDone taskLength={tasks.length} count={isCompletedTask.length} />

          <select className="form-select mb-4" onChange={handleSelect}>
            <option value="default">Default</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not incomplete</option>
          </select>

          {tasks.length === 0 ? (
            <p className="text-center">No items found...</p>
          ) : (
            <List>
              {sortTasks.map((task, index) => {
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
          )}
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

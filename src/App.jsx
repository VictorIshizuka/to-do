import { AddTask } from "./components/AddTask";
import { CountDone } from "./components/CountDone";
import { GroupButtons } from "./components/GroupButtons";
import { Li } from "./components/LiItem";
import { Ul } from "./components/Ul";
import { Select } from "./components/Select";

import { initialItems as tasks } from "./data/initialItens";

function App() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">TO-DO List</h1>

        <div className="col-8">
          <CountDone />
          <Select />

          <Ul>
            {tasks.map((task, index) => {
              return <Li label=" Default checkbox" key={index} task={task} />;
            })}
          </Ul>
        </div>
        <div className="col-4">
          <AddTask />
          <GroupButtons />
        </div>
      </div>
    </div>
  );
}

export default App;

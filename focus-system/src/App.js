import { React, useState } from "react";

import "./App.css";

import data from "./data/mockData.json";

// Components
import Header from "./components/header";
import TaskList from "./components/tasklist";

function App() {
  const [taskList, setTaskList] = useState(data);
  return (
    <div className="App">
      <Header />
      <TaskList taskList={taskList} />
    </div>
  );
}

export default App;

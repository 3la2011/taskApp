import React from "react";
import TaskCards from "./TaskCards";

const MainPage = (props) => (
  <div className="MainPage">
    <TaskCards tasks={props.tasks} addTask={props.addTask} />
  </div>
);

export default MainPage;

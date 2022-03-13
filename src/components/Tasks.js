import React from "react";
import Task from "./Task";

const Tasks = (props) =>
  props.tasks.map((task) => (
    <Task task={task} handleToggleEdit={props.handleToggleEdit} />
  ));

export default Tasks;

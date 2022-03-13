import React from "react";

const Task = (props) => (
  <div
    className="TaskTitle flex"
    id={props.task.id}
    onClick={(e) => props.handleToggleEdit(e)}
  >
    {props.task.title}
  </div>
);

export default Task;

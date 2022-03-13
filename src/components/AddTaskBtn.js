import React from "react";

const AddTaskBtn = (props) => (
  <button onClick={() => props.addTask()}>+</button>
);

export default AddTaskBtn;

import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Tasks from "./components/Tasks";
import EditPage from "./components/EditPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{ title: "task1", detail: "detail", id: "task1" }],
      isEditOpen: false,
      taskClicked: "",
    };
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.addTask = this.addTask.bind(this);
    this.handleSaveEditedTask = this.handleSaveEditedTask.bind(this);
  }
  addTask() {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          title: `task ${this.state.tasks.length + 1}`,
          detail: "detail",
          id: `task ${this.state.tasks.length + 1}`,
        },
      ],
    });
  }

  handleToggleEdit(e) {
    this.setState({
      isEditOpen: !this.state.isEditOpen,
      taskClicked: this.state.tasks.filter(
        (task) => task.id === e.target.id
      )[0],
    });
  }

  handleSaveEditedTask(newValues) {
    const indexEditedTask = this.state.tasks.indexOf(newValues.id)[0];
    console.log(newValues);
    this.setState({ tasks: [...this.state.tasks.splice()] });
  }
  render() {
    const editPage = this.state.isEditOpen ? (
      <EditPage
        task={this.state.taskClicked}
        handleSaveEditedTask={this.handleSaveEditedTask}
      />
    ) : (
      ""
    );

    return (
      <div className="App flex col">
        <Tasks
          tasks={this.state.tasks}
          key={this.state.tasks.id}
          handleToggleEdit={this.handleToggleEdit}
        />
        <button id="addTaskBtn" onClick={() => this.addTask()}>
          +
        </button>
        {editPage}
      </div>
    );
  }
}
export default App;

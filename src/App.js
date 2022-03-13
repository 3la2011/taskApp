import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Tasks from "./components/Tasks";
import EditPage from "./components/EditPage";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: "task1", detail: "detail", id: "task1" },
        { title: "task2", detail: "detail2", id: "task2" },
      ],
      isEditOpen: false,
      taskClicked: "",
    };
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleSaveEditedTask = this.handleSaveEditedTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }
  handleAddTask() {
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
    e
      ? this.setState({
          isEditOpen: !this.state.isEditOpen,
          taskClicked: this.state.tasks.filter(
            (task) => task.id === e.target.id
          )[0],
        })
      : this.setState({
          isEditOpen: !this.state.isEditOpen,
        });
  }

  handleDeleteTask(taskId) {
    const indexEditedTask = this.state.tasks
      .map((elem) => elem.id)
      .indexOf(taskId);
    console.log(indexEditedTask, this.state.tasks);
    this.setState({
      tasks: [
        ...this.state.tasks.slice(0, indexEditedTask),
        ...this.state.tasks.slice(indexEditedTask + 1, this.state.tasks.length),
      ],
    });
    console.log(this.state.tasks);
    this.handleToggleEdit();
  }

  handleSaveEditedTask(newValues) {
    const indexEditedTask = this.state.tasks
      .map((elem) => elem.id)
      .indexOf(newValues.id);
    this.setState({
      tasks: [
        ...this.state.tasks.slice(0, indexEditedTask),
        ...this.state.tasks.slice(indexEditedTask + 1, this.state.tasks.length),
        newValues,
      ],
    });
    this.handleToggleEdit();
  }
  render() {
    const editPage = this.state.isEditOpen ? (
      <EditPage
        task={this.state.taskClicked}
        handleToggleEdit={this.handleToggleEdit}
        handleSaveEditedTask={this.handleSaveEditedTask}
        handleDeleteTask={this.handleDeleteTask}
      />
    ) : (
      ""
    );

    return (
      <div className="App flex col">
        <Header />
        <Tasks
          tasks={this.state.tasks}
          key={this.state.tasks.id}
          handleToggleEdit={this.handleToggleEdit}
        />
        <button id="addTaskBtn" onClick={() => this.handleAddTask()}>
          +
        </button>
        {editPage}
      </div>
    );
  }
}
export default App;

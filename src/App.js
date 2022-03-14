import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Tasks from "./components/Tasks";
import EditPage from "./components/EditPage";
import newId from "./functions/newId";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: "task1", detail: "detail", id: `task${newId()}` },
        { title: "task2", detail: "detail2", id: `task${newId()}` },
        { title: "task3", detail: "detail3", id: `task${newId()}` },
        { title: "task4", detail: "detail4", id: `task${newId()}` },
      ],
      isEditOpen: false,
      taskClicked: "",
    };
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleSaveEditedTask = this.handleSaveEditedTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
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

  handleAddTask() {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          title: `task ${this.state.tasks.length + 1}`,
          detail: "detail",
          id: `task${newId()}`,
        },
      ],
    });
  }

  handleSaveEditedTask(newValues) {
    const newTasks = this.handleDeleteTask(newValues.id);
    this.setState({
      tasks: [...newTasks, newValues],
    });
  }

  handleDeleteTask(taskId) {
    const tasks = this.state.tasks;
    const indexOfTask = tasks.map((elem) => elem.id).indexOf(taskId);
    const newTasks = [
      ...tasks.slice(0, indexOfTask),
      ...tasks.slice(indexOfTask + 1, tasks.length),
    ];
    this.setState({
      tasks: [...newTasks],
    });

    this.handleToggleEdit();
    return newTasks;
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

import React from "react";

class EditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task,
    };
    this.handleSaveEditedTask = (value) => props.handleSaveEditedTask(value);
    this.handleDeleteTask = (value) => props.handleDeleteTask(value);
    this.handleToggleEdit = () => props.handleToggleEdit();
  }

  render() {
    console.log(this.state.task);
    return (
      <div className="EditPage flex col">
        <div className="closeEdit" onClick={() => this.handleToggleEdit()} />
        <textarea className="textarea flex" id="textareaTitle">
          {this.state.task.title}
        </textarea>

        <textarea className="textarea flex" id="textareaDetail">
          {this.state.task.detail}
        </textarea>
        <div className="editBtns flex">
          <button
            className="btn"
            id="save"
            onClick={() =>
              this.handleSaveEditedTask({
                title: document.getElementById("textareaTitle").value,
                detail: document.getElementById("textareaDetail").value,
                id: this.state.task.id,
              })
            }
          >
            Save
          </button>
          <button
            className="btn"
            id="delete"
            onClick={() => this.handleDeleteTask(this.state.task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default EditPage;

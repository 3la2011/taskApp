import React from "react";

class EditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task,
    };
    this.handleSaveEditedTask = (value) => props.handleSaveEditedTask(value);
  }

  render() {
    console.log(this.state.task);
    return (
      <div className="EditPage flex col">
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
            onClick={() => this.handleSaveEditedTask({ id: "task1" })}
          >
            Save
          </button>
          <button className="btn" id="delete">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default EditPage;

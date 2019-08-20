import React from "react";
import axios from "axios";
import "./notes.css";

class SingleNote extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleNew(){
    axios.post("/notes")
    .then(() => axios.get("/notes"))
    .then(response => this.setState({ allNotes: response.data }))
    .catch(console.error)
  }

  handleSave = (id, text) => {
    axios.put(`/updateNote/${id}`, { note: text })
    .then(() => axios.get("/notes"))
    .then(response => this.setState({ allNotes: response.data }))
    .catch(console.error)
  }

  handleDelete = (id) => {
    axios.delete(`/deleteNote/${id}`)
    .then(() => axios.get("/notes"))
    .then(response => this.setState({ allNotes: response.data }))
    .catch(console.error)
  }

  handleChange = e => this.setState({ text: e.target.value });

  render() {
    return (
      <div className="singleNote">
        <div>
        <textarea
          placeholder="Enter Text"
          value={this.state.text}
          onChange={this.handleChange}
          className="text"
          cols="33"
          rows="5"
        />
        <button
          className="delete"
          onClick={() => this.handleDelete(this.props.note.id)}
        >
          Delete
        </button>
        <button
          className="save"
          onClick={() =>
            this.handleSave(this.props.note.id, this.state.text)
          }
        >
          Save
        </button>
        </div>
      </div>
    );
  }
}

export default SingleNote;

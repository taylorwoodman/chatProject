import React from "react";
import axios from "axios";
import "./notes.css";

class SingleNote extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      text: props.note.note
    }
  }

  

  handleSave = (id, text) => {
    console.log(text)
    const body = {
      note: text
    }

    axios.put(`/updateNote/${id}`, body)
    .then(() => axios.get("/notes"))
    .then(response => this.setState({ allNotes: response.data }))
    .catch(console.error)
  }

  handleDelete = (id) => {
    console.log(id)
    axios.delete(`/deleteNote/${id}`)
    .then(() => axios.get("/notes"))
    .then(response => this.setState({ allNotes: response.data }))
    .catch(console.error)
  }

  handleChange = e => {
    console.log(e)
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="singleNote">
        <div>
        <textarea
          name="text"
          placeholder="Enter Text"
          value={this.state.text}
          onChange={this.handleChange}
          className="text"
          cols="33"
          rows="5"
        />
        <button
          className="delete"
          onClick={() => this.handleDelete(this.props.id.id)}
        >
          Delete
        </button>
        <button
          className="save"
          onClick={() =>
            this.handleSave(this.props.id.id, this.state.text)
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

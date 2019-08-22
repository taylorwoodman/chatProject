import React from "react";
import axios from "axios";
import SingleNote from "./singleNote";
import "./notes.css";

class Notes extends React.Component {
  constructor() {
    super();

    this.state = {
      allNotes: []
    };
  }

  componentDidMount() {
    axios.get("/notes")
    .then(response => {
      console.log(response.data)
      this.setState({ allNotes: response.data })
    })
    .catch(console.error)
  }

  handleChange = e => this.setState({ text: e.target.value });


  handleCreate = () => {
    return <SingleNote />
  }

  render() {
    
    const notesList = this.state.allNotes.map((note, i) => {
      console.log(note)
      return (
        <div key={i}>
      <SingleNote
      key={i}
      note={note}
      text={note.note}
      allNotes={this.state.allNotes}
      />
      </div>
    )})
    return (
      <div className="notesContainer">
        <button
        className="edit"
        onClick={this.handleCreate}
        >New Note
        </button>
        <div>{notesList}</div>
      </div>
    );
  }
}

export default Notes;

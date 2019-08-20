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

  handleCreate = () => {
    return <div><SingleNote /></div>
  }

  render() {
    
    const notesList = this.state.allNotes.map((note, i) => {
      return (
        <div>
      <SingleNote
      key={i}
      note={note}
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
        <SingleNote />
        <SingleNote />
        <div>{notesList}</div>
      </div>
    );
  }
}

export default Notes;

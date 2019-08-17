import React from "react";
import "./notes.css"

class Notes extends React.Component {
  constructor(){
    super()

    this.state={
      note: ''
    }
  }


  render(){

    return (
      <div className="notesContainer">
        <button>New Note</button>
      </div>
    );
  }

  
}

export default Notes;

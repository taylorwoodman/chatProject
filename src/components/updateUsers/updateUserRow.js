import React from "react";



class UpdateUserRow extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      id: props.users.id,
      firstName: props.users.first_name,
      lastName: props.users.last_name,
      email: props.users.email,
      username: props.users.username,
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });


  render(){
    return (
      <div className="users">
                <input className="cell1"
                 name="firstName"
                 onChange={(e) => this.handleChange(e)}
                 value={this.state.firstName}
                  />
                <input className="cell1" 
                name="lastName" 
                onChange={(e) => this.handleChange(e)} 
                value={this.state.lastName} 
                />
                <input className="email1" 
                name="email" 
                onChange={(e) => this.handleChange(e)} 
                value={this.state.email}
                />
                <input className="cell1" 
                name="username" 
                onChange={(e) => this.handleChange(e)} 
                value={this.state.username}
                />
                
                <button className="delete" onClick={() => this.props.handleDelete(this.state.id)}>Delete</button>
                <button className="save" onClick={() => this.props.handleSubmit(this.state)}>Save</button>
              </div>
    )
  }
}

export default UpdateUserRow;
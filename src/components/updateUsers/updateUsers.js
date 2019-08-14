import React from "react";
import axios from "axios";
import "./updateUsers.css";



class UpdateUsers extends React.Component{
    constructor() {
        super();
    
        this.state = {
          allUsers: [],
          firstName: '',
          lastName: '',
          email: '',
          username: ''
        };
      }
    
      componentDidMount() {
        axios
          .get("/allUsers")
          .then(response => {
            this.setState({ allUsers: response.data });
          })
          .catch(error => {
            console.log(error);
          });
      }

      handleChange = e => this.setState({ [e.target.name]: e.target.value });


    render(){
        const users = this.state.allUsers.map(users => {
            return (
              <div className="users">
                <input className="cell"
                 name="firstName"
                 onChange={this.handleChange}
                 value={users.first_name}
                  />
                <input className="cell" 
                name="lastName" 
                onChange={this.handleChange} 
                value={users.last_name} 
                />
                <input className="email" 
                name="email" 
                onChange={this.handleChange} 
                value={users.email}
                />
                <input className="cell" 
                name="username" 
                onChange={this.handleChange} 
                value={users.username}
                />
                <button className="edit">Delete</button>
              </div>
            );
        });
        return(
            <div className="container">
            <div className="header">
              <div className="cell">First Name</div>
              <div className="cell">Last Name</div>
              <div className="email">Email</div>
              <div className="cell">Username</div>
              <button className="edit" onClick={() => {this.props.updateView("displayUsers")}}>Save</button>
            </div>  
            <div className="usersContainer">{users}</div>
          </div>
        )
    }
}

export default UpdateUsers;
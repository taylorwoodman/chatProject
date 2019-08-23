import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateUserRow from "./updateUserRow"
import "./updateUsers.css";



class UpdateUsers extends React.Component{
    constructor() {
        super();
    
        this.state = {
          allUsers: [],
          
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


      handleDelete = (id) => {
        console.log(id)
        axios
        .delete(`/users/${id}`)
        .then(() => axios.get("/allUsers"))
        .then(({data: allUsers}) => this.setState({allUsers}))
        .catch((error) => console.log(error))
      }

      handleSubmit = (user) => {
        axios
        .put(`/users/${user.id}`, user)
        .then(() => axios.get("/allUsers"))
        .then(({data: allUsers}) => {
          axios.get('/loggedIn').then(response => {
            console.log(response.data)
            this.props.updateUser(response.data)})
          this.setState({allUsers})
        })
        .catch((error) => console.log(error))
      }


    render(){
      console.log(this.state)
        const users = this.state.allUsers.map(user => {
            return (
              <UpdateUserRow key={user.id} user={user} handleDelete={this.handleDelete} handleSubmit={this.handleSubmit} />
            );
        });
        return(
          <div className="updateUsers">
            <div className="sideBar">
                <div className="welcome">
                  Welcome home, {this.props.user.first_name}!
                </div>
                <div className="currentUser">User Info</div>
                  <div className="homeInfo">
                    Name:
                    {" " + this.props.user.first_name + " " + this.props.user.last_name}
                  </div>
                  <div className="homeInfo">
                    Username:{" " + this.props.user.username}
                  </div>
                <Link to="/login">
                  <button className="submit" onClick={this.handleLogout}>Logout</button>
                </Link>
              </div>
            <div className="container1">
            <div className="header">
              <div className="cell">First Name</div>
              <div className="cell">Last Name</div>
              <div className="email">Email</div>
              <div className="cell">Username</div>
              <Link to="/home">
              <button className="edit">Done</button>
              </Link>
            </div>
            <div className="usersContainer">{users}</div>
          </div>
        </div>

        )
    }
}

export default UpdateUsers;
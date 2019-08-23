import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Notes from "../Notes/notes";

class UserHome extends React.Component {

  state = {
    id: ''
  }

  componentDidMount = () => {

    axios.get("/users").then(response => {
      console.log(response.data)
      this.setState({id: response.data.id})
      this.props.updateUser(response.data);
    });
  };

    handleLogout() {
        axios.get("/logout");
      }

  render() {
    if (!this.props.user) return "user not found";

    return (
      <div className="parentHome">
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
            Username: {this.props.user.username}
          </div>
          <div className="homeInfo1">Email:</div>
          <div className="homeInfo1">
            {this.props.user.email}
          </div>

          <Link to="/login">
            <button className="submit" onClick={this.handleLogout}>Logout</button>
          </Link>
        </div>
        <Notes id={this.state.id}/>
      </div>
    );
  }
}

export default UserHome;

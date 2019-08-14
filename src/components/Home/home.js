import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Users from "../Users/users";
import UpdateUsers from "../updateUsers/updateUsers";
import "./home.css";

class Home extends React.Component {
constructor(){
  super()

  this.state = {
    view: 'displayUsers'
  }
  this.updateView = this.updateView.bind(this)
}

  componentDidMount = () => {
    axios.get("/users").then(response => {
      this.props.updateUser(response.data);
    });
  };

  handleLogout() {
    axios.get("/logout");
  }

  updateView(name){
    this.setState({view: name})
  }

  displayUsers(){
    return (
    <Users updateView = {this.updateView} />
    )
  }

  updateUsers(){
    return(
    <UpdateUsers updateView = {this.updateView}/>
    )
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
            Username:{" " + this.props.user.username}
          </div>

          <Link to="/login">
            <button className="submit" onClick={this.handleLogout}>Logout</button>
          </Link>
        </div>
        {this.state.view === "displayUsers" ? this.displayUsers() : null}
        {this.state.view === "updateUser" ? this.updateUsers() : null}
      </div>
    );
  }
}

export default Home;

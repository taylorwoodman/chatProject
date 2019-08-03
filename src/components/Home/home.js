import React from "react";
import axios from "axios";
import {Link}  from "react-router-dom";
import "./home.css";

class Home extends React.Component {

  constructor(){
    super()

    this.state = {
        user1: null
    }
}
componentDidMount(){
    return axios.get('/users')
    .then(({data: user1}) => {
      this.setState({user1})
    })
    .catch((error) => {
        console.error(error)
        this.props.history.push('/')
    })
}

handleLogout(){
  axios.get('/logout')
}

  render() {
    if(!this.state.user1) return ('user not found')
    console.log(this.state.user1)
    return (
      <div className="parentHome">
        <div className="sideBar">
        <div className="welcome">Welcome home, {this.state.user1.first_name}!</div>
        <div className="currentUser">User Info</div>
        <div className="homeInfo">Name:{' ' + this.state.user1.first_name + ' ' + this.state.user1.last_name}</div>
        <div className="homeInfo">Username:{' ' + this.state.user1.username}</div>
      <Link to="/"><button onClick={this.handleLogout}>Logout</button></Link>
      </div>
      </div>
    );
  }
}

export default Home;
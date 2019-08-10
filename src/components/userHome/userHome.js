import React from "react";
import {Link} from "react-router-dom";

class UserHome extends React.Component{

    render(){
        return(
            <div className="parentHome">
        <div className="sideBar">
          <div className="welcome">Welcome home, {this.props.user.first_name}!</div>
          <div className="currentUser">User Info</div>
          <div className="homeInfo">
            Name:{" " + this.props.user.first_name + " " + this.props.user.last_name}
          </div>
          <div className="homeInfo">Username:{" " + this.props.user.username}</div>

          <Link to="/login">
            <button onClick={this.handleLogout}>Logout</button>
          </Link>
        </div>
        
      </div>
            
        )
    }
}

export default UserHome;
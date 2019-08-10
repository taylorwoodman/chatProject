import React from "react";
import axios from "axios";
import "./users.css";


class Users extends React.Component{

    constructor(){
        super()

        this.state = {
            allUsers: []
        }
    }

componentDidMount(){
    axios.get('/allUsers')
    .then(response => {
        console.log(response.data)
        this.setState({allUsers: response.data})
        
    })
    .catch(error => {
        console.log(error)
    })
}

handleEdit(){
    
}


    render(){
        const users = this.state.allUsers.map((users) => {
            return (
            <div className="users">
                <div className="cell"> {users.first_name} </div>
                <div className="cell"> {users.last_name} </div>
                <div className="email"> {users.email} </div>
                <div className="cell"> {users.username} </div>
                <button className="edit">Edit User</button>
            </div>
            )
        })
        return(
            
            <div className="usersContainer">
                <div>{users}</div>
            </div>
            
        )
    }
}

export default Users;
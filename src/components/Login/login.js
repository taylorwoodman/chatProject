import React from "react";
import axios from "axios";
import {Link, withRouter }  from "react-router-dom";
import "./login.css";

class Login extends React.Component {
  constructor(){
    super()

  this.state = {
    email: '',
    password: '',
  }
}

handleLogin = async() => {
  try {
    const body = {
      email: this.state.email,
      password: this.state.password
    }

    if(body.email && body.password) {
    axios.post('/login', body)
    .then((response, req) => {
      console.log(response)
      axios.get('/loggedIn')
      .then((response) => {
        this.props.updateUser(response.data)
      })
      console.log(this.state.user)
      if(response.data.admin === true) {
        this.props.history.push('/home')
      } else {
        this.props.history.push('/userHome')
      }
    })
  } else {
    alert('Login incorrect')
    this.props.history.push('/')
  }

  } catch (error) {
    console.error(error)
    
  }
}


handleChange = (e) => this.setState({[e.target.name]: e.target.value})

  render() {
    return (
      <div className="parentLogin">
        <div className="login">
          <input className="input" 
          placeholder="email" 
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange} />
          <input className="input" 
          placeholder="password" 
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
           />
          <button className="submit" onClick={this.handleLogin}>Login</button>
          <Link to="/signup">
              <button className="submit">Sign Up</button>
            </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);

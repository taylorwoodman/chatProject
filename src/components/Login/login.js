import React from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import "./login.css";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      password: "",
      username: ""
    };
  }

  handleLogin = async () => {
    try {
      const body = {
        password: this.state.password,
        username: this.state.username
      };

      if (body.username && body.password) {
        axios.post("/login", body).then((response, req) => {
          
          axios.get("/loggedIn").then(response => {
            this.props.updateUser(response.data);
          });

          if (response.data.admin && response.data.owner === true) {

            this.props.history.push("/home");
          } else {

            this.props.history.push("/userHome");
          }
        });
      } else {
        alert("Login incorrect");
        this.props.history.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="parentLogin">
        <div className="login">
          <input
            className="input"
            placeholder="username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            className="input"
            placeholder="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="submit" onClick={this.handleLogin}>
            Login
          </button>
          <Link to="/signup">
            <button className="submit">Sign Up</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);

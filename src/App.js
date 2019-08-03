import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Signup from "./components/Signup/signup";
import Login from "./components/Login/login";
import Home from "./components/Home/home";
import "./App.css";

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <div className="navBar">
          </div>

          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup} />
            <Route path="/home" component={Home} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

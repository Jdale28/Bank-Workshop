import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import LogIn from "./components/LogIn";
import Debits from "./components/Debits";
import Credits from "./components/Credits";
import Nav from "./components/Nav";

class App extends Component {
  state = {
    currentUser: {
      name: "No User",
      balance: 0,
      credits: {
        description: "",
        amount: 0,
        date: ""
      },
      debits: {
        description: "",
        amount: 0,
        date: ""
      }
    }
  }

  updateUser = (newUser) => {
    this.setState({currentUser: newUser})
  }

  render() {
    const ProfileComponent = () => {
      // In this situation, must have return so it will actually do something
      return <Profile currentUser={this.state.currentUser}/>
    }
    const LogInComponent = (props) => (<LogIn {...props} updateUser={this.updateUser}/>)
    
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/login" render={LogInComponent} />
              {/* Render calls a function that will render specific information from your state/component */}
              <Route exact path="/profile" render={ProfileComponent} />
              <Route exact path="/profile/debits" component={Debits} />
              <Route exact path="/profile/credits" component={Credits} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

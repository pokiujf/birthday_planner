import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UserListing from "./components/UserListing";
import User from "./components/User";

class App extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <PrivateRoute path="/users/:id" component={User} />
            <PrivateRoute path="/users" component={UserListing} />
            <PrivateRoute exact path="/" component={UserListing} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          localStorage.getItem("user") ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        );
      }}
    />
  );
}

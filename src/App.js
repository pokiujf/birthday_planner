import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UserListing from "./components/UserListing";
import User from "./components/User";

class App extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <Router>
        <PrivateRoute path="/" component={UserListing}/>
        <PrivateRoute path="/users" component={UserListing}/>
        <PrivateRoute path="/users/:id" component={User}/>
        <Route path="/login" component={LoginPage}/>
      </Router>
    );
  }
}

export default App;

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
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
      }
    />
  );
}

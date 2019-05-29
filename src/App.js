import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import LoginPage from "./components/loginPage";

class App extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <Router>
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

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import setAuthToken from "utils/setAuthToken";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Board from "layouts/Board.js";

import jwt_decode from "jwt-decode";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
// import Index from "views/Index.js";

console.log('index')
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  console.log(localStorage.jwtToken)
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  // store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    // Redirect to login
    document.location.href = "/auth/login"
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route path="/admin" component={Admin} /> */}
      <Route path="/auth" component={Auth} />
      <Route path="/board" component={Board} />
      {/* <Redirect from="*" to="/" /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

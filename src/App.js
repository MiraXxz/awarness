import React, { Component } from "react";
import "./App.css";
import UserNameForm from "./components/userNameForm";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import VerificationCodeForm from "./components/verificationCodeFrom";
import ChangePasswordForm from "./components/changePasswordForm";
import NewPasswordForm from "./components/newPasswordForm";
import LoginPage from "./components/loginPage";
import AdminHomePage from "./components/adminHomePage";
import PasswordForm from "./components/passwordForm";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <Switch>
          <Route path="/Login" component="LoginMain" />
          <Route path="/Home" component="AdminHomePage" />
          <Route path="/" component="AdminHomePage" />
        </Switch> */}
      </React.Fragment>
    );
  }
}

export default App;

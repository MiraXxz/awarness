import React, { Component } from "react";
import "../login.css";

import loginImg from "../pictures/loginpic.jpg";
import slideImage1 from "../pictures/slide1.jpg";
import slideImage2 from "../pictures/slide2.jpg";
import whiteImg from "../pictures/white.png";

import UserNameForm from "./userNameForm";
import { Route, Switch, Link } from "react-router-dom";
import VerificationCodeForm from "./verificationCodeFrom";
import NewPasswordForm from "./newPasswordForm";
import AdminHomePage from "./adminHomePage";
import PasswordForm from "./passwordForm";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Carousel from "./common/carousel";
import LoginForm from "./loginform";
import ForgotPasswordForm from "./forgotPasswordForm";

class LoginMain extends Component {
  state = { page: 10 };

  switchPage = dataFromChild => {
    console.log(dataFromChild);
    this.setState({ page: dataFromChild });
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="img-bg"
          style={{
            backgroundImage: `url(${loginImg})`
          }}
        />
        {/* <div className="img-bg-transparent" /> */}

        <div
          className="container-fluid main-cont m-0"
          style={{ width: "100%" }}
        >
          <div className="row justify-content-end min-vh-100 main-row align-items-center">
            <div className="col my-auto h-100 main-col col-xs-4 col-md-6 col-sm-6 col-lg-4 text-center align-items-center flex-column pr-5 pl-5 pr-sm-5 pl-sm-5 pb-sm-5 min-vh-100">
              <h1 className="awareness-header mt-5">Orcas Awareness</h1>

              {(() => {
                console.log(this.state.page);
                switch (this.state.page) {
                  case 0:
                    return (
                      <UserNameForm
                        forgot={false}
                        callbackFromParent={this.switchPage}
                      />
                    );
                  case 1:
                    return (
                      <PasswordForm callbackFromParent={this.switchPage} />
                    );
                  case 2:
                    return (
                      <VerificationCodeForm
                        callbackFromParent={this.switchPage}
                      />
                    );
                  case 3:
                    return (
                      <NewPasswordForm
                        firstTime={false}
                        callbackFromParent={this.switchPage}
                      />
                    );

                  case 4:
                    return (
                      <AdminHomePage callbackFromParent={this.switchPage} />
                    );

                  case 5:
                    return (
                      <UserNameForm callbackFromParent={this.switchPage} />
                    );

                  case 20:
                    return (
                      <ForgotPasswordForm
                        callbackFromParent={this.switchPage}
                      />
                    );

                  case 7:
                    return (
                      <UserNameForm
                        forgot={true}
                        callbackFromParent={this.switchPage}
                      />
                    );

                  case 10:
                    return (
                      <LoginForm
                        forgot={false}
                        callbackFromParent={this.switchPage}
                      />
                    );

                  case 33:
                    return (
                      <NewPasswordForm
                        firstTime={true}
                        callbackFromParent={this.switchPage}
                      />
                    );

                  default:
                    return (
                      <UserNameForm callbackFromParent={this.switchPage} />
                    );
                }
              })()}

              {/* <Switch>
                <Route path="/signin/username" component={UserNameForm} />
                <Route path="/signin/password" component={PasswordForm} />
                <Route path="/signinfirst" component={UserNameForm} />
                <Route path="/login" component={UserNameForm} />
                <Route path="/verifyaccount" component={VerificationCodeForm} />
                <Route path="/newpassword" component={NewPasswordForm} />
                <Route path="/adminhome" component={AdminHomePage} />
                <Route path="/" component={UserNameForm} />
              </Switch> */}

              {/* <Route
                render={location => (
                  <TransitionGroup>
                    <CSSTransition
                      timeout={30000}
                      className="fade"
                      key={location.key}
                    >
                      <Switch location={location}>
                        
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                )}
              /> */}

              {/* <UserNameForm></UserNameForm> */}

              {/* <p style={{ color: "white" }}>
                Not a member? click <Link to="#">here</Link> to Register
              </p> */}
            </div>

            <div className="col main-col-2 col-xs-8 col-md-6 col-sm-6 col-lg-8 text-center align-items-center flex-column  pt-4 pr-5 pl-5 d-none d-md-block">
              <Carousel></Carousel>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginMain;

import React, { Component } from "react";
import "../login.css";

import loginImg from "../pictures/loginpic.jpg";

import UserNameForm from "./userNameForm";
import VerificationCodeForm from "./verificationCodeFrom";
import NewPasswordForm from "./newPasswordForm";
import AdminHomePage from "./adminHomePage";
import Carousel from "./common/carousel";
import LoginForm from "./loginform";
import ForgotPasswordForm from "./forgotPasswordForm";

class LoginMain extends Component {
  state = { page: 0 };

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
                      <LoginForm
                        forgot={false}
                        firstTime={false}
                        callbackFromParent={this.switchPage}
                      />
                    );

                  case 1:
                    return (
                      <LoginForm
                        forgot={false}
                        firstTime={true}
                        callbackFromParent={this.switchPage}
                      />
                    );

                  case 2:
                    return (
                      <VerificationCodeForm
                        firstTime={false}
                        callbackFromParent={this.switchPage}
                      />
                    );

                  case 22:
                    return (
                      <VerificationCodeForm
                        firstTime={true}
                        callbackFromParent={this.switchPage}
                      />
                    );

                  case 3:
                    return (
                      <ForgotPasswordForm
                        callbackFromParent={this.switchPage}
                      />
                    );

                  case 4:
                    return (
                      <NewPasswordForm
                        firstTime={true}
                        callbackFromParent={this.switchPage}
                      />
                    );

                  case 5:
                    return (
                      <NewPasswordForm
                        firstTime={false}
                        callbackFromParent={this.switchPage}
                      />
                    );

                  case 6:
                    return (
                      <AdminHomePage callbackFromParent={this.switchPage} />
                    );

                  default:
                    return (
                      <UserNameForm callbackFromParent={this.switchPage} />
                    );
                }
              })()}
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

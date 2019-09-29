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

class LoginMain extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="img-bg"
          style={{
            backgroundImage: `url(${loginImg})`
          }}
        />
        <div className="img-bg-transparent" />

        <div
          className="container-fluid main-cont m-0"
          style={{ width: "100%" }}
        >
          <div className="row justify-content-end min-vh-100 main-row align-items-center">
            <div className="col my-auto h-100 main-col col-xs-4 col-md-6 col-sm-6 col-lg-4 text-center align-items-center flex-column pr-5 pl-5 pr-sm-5 pl-sm-5 pb-sm-5 ">
              <h1 className="awareness-header mt-5">Orcas Awareness</h1>

              <Switch>
                <Route path="/signin/username" component={UserNameForm} />
                <Route path="/signin/password" component={PasswordForm} />
                <Route path="/signinfirst" component={UserNameForm} />
                <Route path="/login" component={UserNameForm} />
                <Route path="/verifyaccount" component={VerificationCodeForm} />
                <Route path="/newpassword" component={NewPasswordForm} />
                <Route path="/adminhome" component={AdminHomePage} />
                <Route path="/" component={UserNameForm} />
              </Switch>

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

            <div className="col main-col-2 col-xs-8 col-md-6 col-sm-6 col-lg-8 text-center align-items-center flex-column  pt-4 pr-5 pl-5 ">
              <div class="bd-example">
                <div
                  id="carouselExampleCaptions"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleCaptions"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleCaptions"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleCaptions"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={loginImg} className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={slideImage1}
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block ">
                        <h5>Second slide label</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={slideImage2}
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">السابق</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">التالي</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginMain;

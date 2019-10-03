import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class UserNameForm extends Form {
  state = {
    data: { username: "" },
    errors: {},
    next: 1,
    valid: true
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Email")
      .error(() => {
        return {
          message: "قم بإدخال إيميل أو رقم هاتف صالح"
        };
      })
  };
  schema2 = {
    username: Joi.number()
      .required()
      .min(100000000)
      .max(99999999999)
      .label("Phone number")
      .error(() => {
        return {
          message: "قم بإدخال إيميل أو رقم هاتف صالح"
        };
      })
  };

  doSubmit = () => {
    //call to server

    if (this.state.valid) this.props.callbackFromParent(this.state.next);
    // this.props.history.replace("/signin/password");
    console.log("submitted");
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="fade-in">
            <div className="row justify-content-center  border border-right-0 border-left-0 border-top-0 header-row">
              <h4>تسجييل دخول</h4>
            </div>
            <div className="row">
              <p className="text-white">قم بإدخال الإيميل أو رقم الهاتف</p>
            </div>

            <div className="row">
              {this.renderInput("username", "الإيميل أو رقم الهاتف", "text")}
            </div>

            <div className="row">{this.renderButton("التالي")}</div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default UserNameForm;

import React, { Component } from "react";
import Input from "./common/input";
import Form from "./common/form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";

class PasswordForm extends Form {
  state = {
    data: { password: "" },
    errors: {},
    next: 4,
    forgot: 5,
    valid: true
  };

  schema = {
    password: Joi.string()
      .required()
      .label("Password")
      .min(8)
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "الرجاء إدخال كلمة المرور";
              break;
            case "string.min":
              err.message = "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل";
              break;

            default:
              break;
          }
        });
        return errors;
      })
  };

  doSubmit = () => {
    //call to server
    if (this.state.valid) this.props.callbackFromParent(this.state.next);
    // window.location = "/adminhome";
    // this.props.history.replace("/adminhome");
    console.log("submitted");
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="fade-in">
            <div className="row justify-content-center  border border-right-0 border-left-0 border-top-0 header-row">
              <h4>تسجيل الدخول</h4>
            </div>
            <div className="row">
              <p className="text-white">قم بإدخال كلمة المرور</p>
            </div>
            <div className="row">
              {this.renderInput("password", "كلمة المرور", "password")}
            </div>

            <div className="row">{this.renderButton("دخول")}</div>

            <div className="row end-row">
              <a
                href="#"
                onClick={() => this.props.callbackFromParent(this.state.forgot)}
              >
                نسيت كلمة المرور؟
              </a>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default PasswordForm;

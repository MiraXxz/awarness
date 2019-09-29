import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
    valid: true,
    validUsername: false,
    buttonr: 1,
    next: 4,
    forgot: this.props.forgot,
    nextForgot: 20
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
      }),

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
      }),

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
    // this.props.history.replace("/signin/password");
    console.log("submitted");
  };

  checkUsername = e => {
    e.preventDefault();
    //callback to server // if exists

    this.setState({ validUsername: true, buttonr: 2 });
    console.log(this.state);
  };

  handleCancel = () => {
    this.props.callbackFromParent(this.state.cancel);
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

            {this.state.buttonr === 1 ? (
              <div className="row">
                <button
                  className="btn btn-primary"
                  style={{ width: "100%", marginTop: "5%" }}
                  onClick={this.checkUsername}
                >
                  فحص
                </button>
              </div>
            ) : null}

            {this.state.validUsername && (
              <div>
                <div className="row">
                  <p className="text-white">قم بإدخال كلمة المرور</p>
                </div>
                <div className="row">
                  {this.renderInput("password", "كلمة المرور", "password")}
                </div>

                <div className="row">{this.renderButton("التالي")}</div>
              </div>
            )}

            <div className="row mt-3">
              <a
                href="#"
                onClick={() =>
                  this.props.callbackFromParent(this.state.nextForgot)
                }
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

export default LoginForm;

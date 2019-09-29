import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import Form from "./common/form";

class ForgotPasswordForm extends Form {
  state = {
    data: { username: "", veriCode: "" },
    errors: {},
    next: 3,
    valid: true,
    validCode: false,
    validUsername: false,
    buttonr: 1,
    pattern: /^(?=.*[a-z])(?=.*[0-9])/,
    resendCounter: 0,
    cancel: 0
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

    veriCode: Joi.string()
      .required()
      .min(6)
      .max(6)
      .regex(this.state.pattern)
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "الرجاء إدخال الرمز المرسل إليك";
              break;
            case "string.min":
              err.message = "يجب أن يتكون الرمز من 6 أحرف وأرقام";
              break;

            case "string.max":
              err.message = "يجب أن يتكون الرمز من 6 أحرف وأرقام";
              break;

            case "string.regex.base":
              err.message =
                "يجب أن يتكون الرمز من ستة حروف على الأقل من الأحرف الإنجليزية والأرقام والرموز";
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
          message: "قم بإدخال إيميل أو رقم هاتف صحيح"
        };
      }),

    veriCode: Joi.string()
      .required()
      .min(6)
      .max(6)
      .regex(this.state.pattern)
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "الرجاء إدخال الرمز المرسل إليك";
              break;
            case "string.min":
              err.message = "يجب أن يتكون الرمز من 6 أحرف وأرقام";
              break;

            case "string.max":
              err.message = "يجب أن يتكون الرمز من 6 أحرف وأرقام";
              break;

            case "string.regex.base":
              err.message =
                "يجب أن يتكون الرمز من ستة حروف على الأقل من الأحرف الإنجليزية والأرقام والرموز";
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

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="fade-in">
            <div className="row justify-content-center  border border-right-0 border-left-0 border-top-0 header-row">
              <h4>استعادة كلمة المرور</h4>
            </div>
            <div className="row">
              <p className="text-white">
                قم بإدخال الإيميل أو رقم الهاتف حتى يتم التأكد من حسابك
              </p>
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
                  <p className="text-white">قم بإدخال رمز تأكيد الحساب</p>
                </div>

                <div className="row">
                  {this.renderInput("veriCode", "رمز تأكيد الحساب", "text", 6)}
                </div>

                <div className="row">{this.renderButton("التالي")}</div>
              </div>
            )}
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default ForgotPasswordForm;
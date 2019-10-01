import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import "../login.css";

class VerificationCodeForm extends Form {
  state = {
    data: { veriCode: "" },
    errors: {},
    pattern: /^(?=.*[a-z])(?=.*[0-9])/,
    resendCounter: 0,

    valid: true,
    pages: { goNewPass: 4, goCancel: 1 }
  };

  schema = {
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

    if (this.state.valid)
      this.props.callbackFromParent(this.state.pages.goNewPass);
    // this.props.history.replace("/newpassword");
    console.log("submitted");
  };

  handleCancel = () => {
    this.props.callbackFromParent(this.state.pages.goCancel);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="fade-in"></div>
          <div className="row justify-content-center  border border-right-0 border-left-0 border-top-0 header-row">
            <h4>تفعيل الحساب</h4>
          </div>
          <div className="row">
            <p className="text-white">
              الرجاء إدخال الرمز الذي تم إرساله إليك.
            </p>
          </div>
          <div className="row">
            {this.renderInput("veriCode", "رمز تفعيل الحساب", "text", 6)}
          </div>

          <div className="row justify-content-center">
            {this.renderButton("التالي")}
          </div>

          <div className="row">
            <a
              href="#"
              onClick={this.handleResend}
              className="btn btn-link link-padding"
            >
              إعادة إرسال الرمز
            </a>
          </div>

          {this.state.resendCounter > 0 && (
            <div className="row">
              <p className="text-white fade-in">
                لقد تم إعادة إرسال الرمز، الرجاء إدخال الرمز الجديد
              </p>
            </div>
          )}

          <div className="row pt-5">
            <a href="#" className="text-danger" onClick={this.handleCancel}>
              إلغاء
            </a>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default VerificationCodeForm;

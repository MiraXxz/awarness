import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import PopUp from "../common/popUp";

class NewPasswordForm extends Form {
  state = {
    data: {
      password: "",
      passwordConfirm: "",
      accepted: this.props.firstTime ? false : true
    },
    errors: { password: "", passwordConfirm: "" },
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,

    firstTimeUser: this.props.firstTime,

    next: 4,
    valid: true,

    pages: {
      goNewPass: 5,
      goCancel: 0,
      goCancelFirst: 1,
      goLogin: 0
    }
  };

  schema = {
    password: Joi.string()
      .required()
      .label("Password")
      .regex(this.state.pattern)
      // .regex(this.state.lower)
      // .regex(this.state.upper)
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "قم بإدخال كلمة المرور";
              break;
            case "string.min":
              err.message = `Password should have at least ${err.context.limit} characters!`;
              break;

            case "string.regex.base":
              err.message =
                "يجب أن تتكون كلمة المرور من ثمانية حروف على الأقل من الأحرف الإنجليزية والأرقام والرموز";
              break;

            default:
              break;
          }
        });
        return errors;
      }),

    passwordConfirm: Joi.any()
      .valid(Joi.ref("password"))
      // .invalid(Joi.ref("password"))
      .required()
      .label("Confirmation")
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "قم بإعادة إدخال كلمة المرور";
              break;

            case "any.allowOnly":
              err.message = "كلمة المرور والإعادة غير متطابقتان";
              break;

            default:
              break;
          }
        });
        return errors;
      }),
    accepted: Joi.boolean().invalid(false)
  };

  doSubmit = () => {
    //call to server
    if (this.state.valid)
      this.props.callbackFromParent(this.state.pages.goLogin);
    // this.props.history.replace("/NewPasswordForm");
    console.log("submitted");
  };

  handleCancel = () => {
    if (this.state.firstTimeUser)
      this.props.callbackFromParent(this.state.pages.goCancelFirst);
    else this.props.callbackFromParent(this.state.pages.goCancel);
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="fade-in">
            <div className="row justify-content-center  border border-right-0 border-left-0 border-top-0 header-row">
              <h4>إنشاء كلمة مرور جديدة</h4>
            </div>
            <div className="row">
              <p className="text-white">قم بإدخال كلمة المرور الجديدة</p>
            </div>
            <div className="row">
              {this.renderInput(
                "password",
                "كلمة المرور الجديدة",
                "password",
                ""
              )}
            </div>
            <div className="row">
              {this.renderInput(
                "passwordConfirm",
                "تأكيد كلمة المرور",
                "password"
              )}
            </div>

            {this.state.firstTimeUser ? (
              <div className="row justify-content-start mt-md-3 mb-md-3">
                <div className="custom-control custom-checkbox custom-control-right">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    name="accepted"
                    checked={this.state.data.accepted}
                    value={this.state.data.accepted}
                    onChange={this.handleCheckbox}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    <span className="text-white">
                      لقد قرأت وأوافق على &nbsp;
                    </span>
                    <span>
                      <PopUp
                        onAccept={this.handleAccept}
                        onDecline={this.handleDecline}
                      ></PopUp>
                    </span>
                  </label>
                </div>
              </div>
            ) : null}

            <div className="row">{this.renderButton("التالي")}</div>

            <div className="row pt-5">
              <a href="#" className="text-danger" onClick={this.handleCancel}>
                إلغاء
              </a>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default NewPasswordForm;

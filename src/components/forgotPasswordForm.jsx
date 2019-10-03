import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class ForgotPasswordForm extends Form {
  state = {
    data: { username: "", veriCode: "" },
    errors: {},
    valid: true,
    validCode: false,
    validUsername: false,
    buttonr: 1,
    pattern: /^(?=.*[a-z])(?=.*[0-9])/,
    resendCounter: 0,
    pages: {
      goNewPass: 5,
      goCancel: 0,
      goCancelFirst: 1
    }
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

    if (this.state.valid)
      this.props.callbackFromParent(this.state.pages.goNewPass);
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
    this.props.callbackFromParent(this.state.pages.goCancel);
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
              {this.renderInput(
                "username",
                "الإيميل أو رقم الهاتف",
                "text",
                255,
                false,
                this.state.validUsername ? true : false
              )}
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
                {/* <FadeIn cont={this.state.resendCounter}></FadeIn> */}
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
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default ForgotPasswordForm;

import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../common/input";
import Isemail from "isemail";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const options = { abortEarly: false };

    let error = {};

    if ("username" in this.state.data) {
      if (Isemail.validate(this.state.data.username)) {
        error = Joi.validate(this.state.data, this.schema, options).error;
      } else {
        error = Joi.validate(this.state.data, this.schema2, options).error;
      }
    } else {
      error = Joi.validate(this.state.data, this.schema, options).error;
    }

    // if ("passwordConfirm" in this.state.data) {
    //   if (this.state.data.passwordConfirm !== this.state.data.password) {
    //     error = "testError";
    //     return error;
    //   }
    // }

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };

    let schema2 = {};

    let error = {};
    let errors = { password: "", passwordConfirm: "" };

    if ("username" in obj) {
      if (Isemail.validate(obj.username)) {
        error = Joi.validate(obj, schema).error;
      } else {
        schema2 = { [name]: this.schema2[name] };
        error = Joi.validate(obj, schema2).error;
      }
    } else {
      error = Joi.validate(obj, schema).error;
    }

    if (name === "passwordConfirm") {
      if (error) {
        if (
          error.details[0].message === "كلمة المرور والإعادة غير متطابقتان" &&
          obj.passwordConfirm === this.state.password
        ) {
          error = null;
          console.log("test");
        }
      }
    }

    // if (!error && "passwordConfirm" in this.state.data) console.log("no error");

    // if (!error && "passwordConfirm" in this.state.data) {
    //   if (obj["passwordConfirm"] !== this.state.data.password) {
    //     error = "testError";
    //     return error;
    //   } else if (obj["password"] !== this.state.data.passwordConfirm) {
    //     error = "testError";
    //     console.log(error);
    //     return error;
    //   } else return null;
    // }

    // console.log(this.state.errors, error);

    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    let errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };

    if (input.type === "checkbox") {
      data[input.name] = !this.state.data.accepted;
    } else data[input.name] = input.value;

    // if ("passwordConfirm" in this.state.data) {
    //   if (
    //     this.state.errors.password === "testError" &&
    //     input.name === "passwordConfirm" &&
    //     errors["passwordConfirm"] === ""
    //   ) {
    //     errors = { password: "", passwordConfirm: "" };
    //   } else if (
    //     this.state.errors.passwordConfirm === "testError" &&
    //     input.password === "passwordConfirm" &&
    //     errors["passwordConfirm"] === ""
    //   ) {
    //     errors = { password: "", passwordConfirm: "" };
    //     console.log("test1");
    //   }
    // }

    this.setState({ data, errors });
  };

  handleAccept = e => {
    const accepted = true;

    const data = { ...this.state.data };
    data["accepted"] = true;

    this.setState({ data });
  };

  handleDecline = e => {
    const accepted = true;

    const data = { ...this.state.data };
    data["accepted"] = false;

    this.setState({ data });
  };

  handleResend = () => {
    //implement resend here
    const resendCounter = this.state.resendCounter + 1;

    this.setState({ resendCounter });
    console.log(this.state);
  };

  renderButton = (
    label,
    classes = "btn btn-primary",
    disabled = this.validate()
  ) => {
    return (
      <button
        disabled={disabled}
        style={{ width: "100%", marginTop: "5%" }}
        className={classes}
      >
        {label}
      </button>
    );
  };

  renderInput = (name, placeholder, type, maxlength = 255) => {
    return (
      <Input
        name={name}
        value={this.state.data[name]}
        onChange={this.handleChange}
        placeholder={placeholder}
        type={type}
        error={this.state.errors[name]}
        maxLength={maxlength}
      />
    );
  };
}

export default Form;
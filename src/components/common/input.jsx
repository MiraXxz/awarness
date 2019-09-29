import React, { Component } from "react";
import Eye from "./eye";
import "../../login.css";

class Input extends Component {
  state = { type: this.props.type };

  handleEye = () => {
    if (this.state.type === "password") {
      let { type } = this.state;
      type = "text";
      this.setState({ type });
    } else if (this.state.type === "text") {
      let { type } = this.state;
      type = "password";
      this.setState({ type });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="form-group" style={{ width: "100%" }}>
          <div className="input-group">
            <input
              value={this.props.value}
              onChange={this.props.onChange}
              name={this.props.name}
              id={this.props.name}
              type={this.state.type}
              placeholder={this.props.placeholder}
              className="form-control input-borders"
              maxLength={this.props.maxLength}
            />

            {this.props.type === "password" && (
              <div className="input-group-append">
                <span className="input-group-text input-addon-borders">
                  <Eye type={this.state.type} onClick={this.handleEye}></Eye>
                </span>
              </div>
            )}

            {this.props.error && (
              <div className="alert alert-danger" style={{ width: "100%" }}>
                <small>{this.props.error && this.props.error}</small>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Input;

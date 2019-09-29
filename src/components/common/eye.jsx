import React, { Component } from "react";

class Eye extends Component {
  render() {
    let classes = "fa fa-eye";
    if (this.props.type === "text") {
      classes += "-slash";
    }

    return (
      <i
        onClick={this.props.onClick}
        style={{
          cursor: "pointer",
          height: "100%"
        }}
        className={classes}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Eye;

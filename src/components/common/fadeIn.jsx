import React, { Component } from "react";

class FadeIn extends Component {
  state = {};
  render() {
    return <div className="fade-in text-white">{this.props.cont}</div>;
  }
}

export default FadeIn;

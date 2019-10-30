import React, { Component } from "react";
import { PatternGrid } from "../../components";

class Login extends Component {
  render() {
    return (
      <>
        <PatternGrid {...this.props} />
      </>
    );
  }
}

export default Login;

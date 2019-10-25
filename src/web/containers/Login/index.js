import React, { Component } from "react";
import { LoginComponent } from "../../components";

class Login extends Component {
  state = {
    dragStart: false,
    pattern: ""
  };
  onDragStart = startIndex => {
    this.setState({
      pattern: `${startIndex}`
    });
  };
  onDragOver = (e, tile) => {
    e.stopPropagation();
    e.preventDefault();
    if (!this.state.pattern.includes(tile)) {
      this.setState({
        pattern: `${this.state.pattern}${tile}`
      });
    }
  };

  onDrop = () => {
    console.log("result", this.state.pattern);
    this.setState({
      pattern: ""
    });
  };
  render() {
    return (
      <>
        <LoginComponent
          onDragStart={this.onDragStart}
          onMouseEnter={this.onMouseEnter}
          onDragOver={this.onDragOver}
          onDrop={this.onDrop}
        />
      </>
    );
  }
}

export default Login;

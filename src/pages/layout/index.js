import React, { Component } from "react";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="header">
          zheshi头部
        </div>
        {this.props.children}
      </div>
    );
  }
}

import React, { Component } from "react";
import reactDom from "react-dom";
import reactToWebcomponent from "react-to-webcomponent";

export class UserDetail extends Component {
  render() {
    return <h1>In userdetail with webcomponent</h1>;
  }
}

const UserDetailComponent = reactToWebcomponent(UserDetail, React, reactDom);

window.customElements.define("user-detail", UserDetailComponent);

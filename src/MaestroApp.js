import React, { Component } from "react";
import AppRouters from "./routers/AppRouters";

export default class MaestroApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <AppRouters />
      </div>
    );
  }
}

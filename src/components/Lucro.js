import React, { Component } from "react";

export default class Lucro extends Component {
  render() {
    let value = this.props.value;
    let cor = this.props.cor;

    let classes = `${cor}`;
    return (
      <div>
        <span className={classes}>{value}</span>
      </div>
    );
  }
}

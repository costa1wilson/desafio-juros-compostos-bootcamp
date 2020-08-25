import React, { Component } from "react";

export default class Periodo extends Component {
  calculo = ({ target }) => {
    let { name, value } = target;
    this.props.periodo(name, value);
  };
  render() {
    let value = this.props.value;
    return (
      <div className="input-field col s4">
        <input
          id="valorInicial"
          type="number"
          name="periodo"
          value={value}
          min="1"
          step="1"
          className="validate"
          onChange={this.calculo}
          onLoad={this.calculo}
        />
        <label className="active" htmlFor="valorInicial">
          Periodo (meses):
        </label>
      </div>
    );
  }
}

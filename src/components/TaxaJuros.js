import React, { Component } from "react";

export default class TaxaJuros extends Component {
  calculo = ({ target }) => {
    let { name, value } = target;
    this.props.taxaJuros(name, value);
  };
  render() {
    let value = this.props.value;
    return (
      <div className="input-field col s4">
        <input
          id="valorInicial"
          type="text"
          name="taxaJuros"
          className="validate"
          onChange={this.calculo}
          value={value}
          onLoad={this.calculo}
        />
        <label className="active" htmlFor="valorInicial">
          Taxa De Juros:
        </label>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class ValorInicial extends Component {
  calculo = ({ target }) => {
    let { name, value } = target;
    this.props.valorInicial(name, value);
  };
  render() {
    let value = this.props.value;
    return (
      <div className="input-field col s4">
        <input
          id="valor_inicial"
          type="text"
          value={value}
          name="valorInicial"
          className="validate"
          onChange={this.calculo}
          onLoad={this.calculo}
        />
        <label className="active" htmlFor="valor_inicial">
          Montante Inicial:
        </label>
      </div>
    );
  }
}

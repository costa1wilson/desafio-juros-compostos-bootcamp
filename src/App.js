import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import ValorInicial from "./components/ValorInicial";
import TaxaJuros from "./components/TaxaJuros";
import Periodo from "./components/Periodo";
import Card from "./components/Card";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      valorInicial: 1000,
      taxaJuros: 0.5,
      periodo: 1,
      variaveis: { id: 0, montante: 0, percentage: 0, perdas: 0 },
      dataCard: [],
    };
  }
  calculo = (name, value) => {
    let { valorInicial, taxaJuros, periodo } = this.state;
    if (name === "periodo") {
      periodo = value;
    } else if (name === "valorInicial") {
      valorInicial = value;
    } else {
      taxaJuros = value;
    }
    let type = "";
    taxaJuros > 0 ? (type = "+") : (type = "-");
    this.setState({
      valorInicial: valorInicial,
      taxaJuros: taxaJuros,
      periodo: periodo,
    });
    this.depreciacao(valorInicial, taxaJuros, periodo, type);
  };

  depreciacao = (value, taxaJuros, periodo, type) => {
    let { dataCard, variaveis } = this.state;
    dataCard.splice(0, dataCard.length);
    let { id, montante, percentage, perdas } = variaveis;
    for (let c = 1; c <= periodo; c++) {
      id = c;

      montante = value * (1 + taxaJuros / 100) ** c;
      perdas = montante - value;
      percentage = (montante / value) * 100 - 100;

      dataCard.push({
        id: id,
        montante: montante,
        percentage: percentage,
        perdas: perdas,
        type: type,
      });
    }
    this.setState({ dataCard: dataCard });
  };
  jurosCompostos = (value, taxaJuros, periodo) => {};

  render() {
    let { valorInicial, taxaJuros, periodo, dataCard } = this.state;
    return (
      <div className="container">
        <h1 className="center">JUROS COMPOSTOS</h1>
        <div className="row">
          <ValorInicial
            value={valorInicial}
            valorInicial={this.calculo}
          ></ValorInicial>
          <TaxaJuros value={taxaJuros} taxaJuros={this.calculo}></TaxaJuros>
          <Periodo value={periodo} periodo={this.calculo}></Periodo>
        </div>
        <div className="row">
          {dataCard.map((data) => {
            let { id, type } = data;
            return (
              <Card
                cor={type === "+" ? "green-text" : "red-text"}
                key={id}
                data={data}
              ></Card>
            );
          })}
        </div>
      </div>
    );
  }
}

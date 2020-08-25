import React, { Component } from "react";
import Montante from "./Montante";
import Lucro from "./Lucro";
import Percentage from "./Percentage";
import css from "./style.module.css";
import { formatNumber, formatPercent } from "./helpers/formats";

export default class Card extends Component {
  render() {
    let { id, montante, percentage, perdas } = this.props.data;
    let cor = this.props.cor;
    let classes = `${cor}`;
    return (
      <div
        className={"card col s12 m2"}
        style={{ width: "150px", marginLeft: "10px" }}
      >
        <div className={css.center}>
          <span className={classes}>{id}</span>
          <div className="col">
            <Montante cor={cor} value={formatNumber(montante)}></Montante>
            <Lucro cor={cor} value={formatNumber(perdas)}></Lucro>
            <Percentage
              cor={cor}
              value={formatPercent(percentage)}
            ></Percentage>
          </div>
        </div>
      </div>
    );
  }
}

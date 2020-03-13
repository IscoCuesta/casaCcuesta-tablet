import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";

import "../styles/Calculator.css";
import "react-input-range/lib/css/index.css";

class Calculator extends Component {
  state = {
    amountValue: 50000,
    yearsValue: 1
  };

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleYearChange = value => {
    this.setState({ yearsValue: value });
  };

  render() {
    const { amountValue, yearsValue } = this.state;

    return (
      <div className="App">
        <h4>Prestamo en pesos ${amountValue}</h4>
        <InputRange
          step={1000}
          maxValue={1000000}
          minValue={10000}
          value={amountValue}
          onChange={this.handleAmountChange}
        />
        <h4>
          en {yearsValue} año {yearsValue > 1 && "s"}
        </h4>
        <InputRange
          step={0.5}
          maxValue={5}
          minValue={1}
          value={yearsValue}
          onChange={this.handleYearChange}
        />
        <Display years={yearsValue} amount={amountValue} />
      </div>
    );
  }
}

export default Calculator;

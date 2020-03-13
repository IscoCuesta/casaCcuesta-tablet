import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";

class Display extends Component {
  state = {
    APR: 0.05
  };

  componentDidMount() {
    this.calculateAPR();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateAPR();
    }
  }

  calculateAPR = () => {
    const { amount } = this.props;

    if (10000 < amount && amount < 50000) {
      this.setState({ APR: 0.05 });
    }
    if (50000 < amount && amount < 100000) {
      this.setState({ APR: 0.1 });
    }
    if (100000 < amount && amount < 500000) {
      this.setState({ APR: 0.15 });
    }
    if (500000 < amount && amount < 1000000) {
      this.setState({ APR: 0.2 });
    }
  };

  calculateMonthlyRepayment = () => {
    const { amount, years } = this.props;

    const decimalFormat = this.state.APR + 1;
    const totalOwed = decimalFormat * amount;
    const monthlyRepayment = totalOwed / (years * 12);

    return <p>${Math.round(monthlyRepayment)}</p>;
  };

  percentageAPR = () => {
    return <p>{this.state.APR * 100}%</p>;
  };

  render() {
    return (
      <div className="flex">
        <DisplayChild func={this.percentageAPR()} text="Tasa de Interes" />
        <DisplayChild
          func={this.calculateMonthlyRepayment()}
          text=" Monto mensual"
        />
      </div>
    );
  }
}

Display.propTypes = {
  years: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default Display;

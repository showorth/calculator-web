import React, { Component } from "react";
import "./calculator.css";
import { join } from "path";

const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:4000"
    : "https://pomegranate-calc-api.herokuapp.com";

const DISPLAY_TYPE = {
  NUMA: "numA",
  NUMB: "numB",
  OPERATOR: "operator",
  RESULT: "result",
  ERROR: "error"
};

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.onNumClick = this.onNumClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setOperator = this.setOperator.bind(this);
    this.getValuefromApi = this.getValuefromApi.bind(this);
    this.canEnableDecimal = this.canEnableDecimal.bind(this);

    this.state = {
      numA: "",
      numB: "",
      operator: "",
      display: "",
      result: ""
    };
  }

  reset() {
    this.setState({
      numA: "",
      numB: "",
      operator: ""
    });
  }

  onNumClick(numValue) {
    var numString = numValue.toString();
    const { operator, numB, numA } = this.state;
    operator
      ? this.setState({ numB: numB + numString, display: DISPLAY_TYPE.NUMB })
      : this.setState({ numA: numA + numString, display: DISPLAY_TYPE.NUMA });
  }
  setOperator(opValue) {
    this.setState({ operator: opValue, display: DISPLAY_TYPE.OPERATOR });
  }

  getDisplay() {
    const { display } = this.state;
    return this.state[display];
  }

  getValuefromApi(endpoint) {
    fetch(API_URL + endpoint)
      .then(r => r.json())
      .then(responseJSON =>
        this.setState({
          result: responseJSON.result,
          display: DISPLAY_TYPE.RESULT
        })
      )
      .catch(e => this.setState({
        result: 'Error',
        display: DISPLAY_TYPE.RESULT
      }));
  }

  onSubmit() {
    const { operator, numB, numA } = this.state;
    var numberA = Number(numA);
    var numberB = Number(numB);
    switch (operator) {
      case "+":
        this.getValuefromApi(
          `/add?firstNumber=${numberA}&secondNumber=${numberB}`
        );
        this.reset();
        break;
      case "-":
        this.getValuefromApi(
          `/subtract?firstNumber=${numberA}&secondNumber=${numberB}`
        );
        this.reset();
        break;
      case "/":
        this.getValuefromApi(
          `/divide?firstNumber=${numberA}&secondNumber=${numberB}`
        );
        this.reset();
        break;
      case "*":
        this.getValuefromApi(
          `/multiply?firstNumber=${numberA}&secondNumber=${numberB}`
        );
        this.reset();
        break;
      default:
        console.log("Not a valid operator");
    }
  }

  canEnableDecimal() {
    const { operator, numB, numA } = this.state;
    return (operator) ? !numB.match(/\./) : !numA.match(/\./);

   }

  render() {
    const { operator, numA, numB } = this.state;

    const enableOperator = !operator && (`${numA}`.length > 0 && `${numB}`.length === 0);
    const enableEquals = `${numB}`.length > 0;
    const enableDecimal = this.canEnableDecimal();

    console.log(enableDecimal, new Date().toString());

    return (
      <div className="Calculator">
        <div id="main">
          <h2>Stephanie's Little Calculator</h2>
          <div id="calculator">
            <div id="body">
              <div id="output">
                <div>
                  <input type="text" id="numInput" value={this.getDisplay()} />
                </div>
              </div>
              <div id="display" />
              <div>
                <button
                  onClick={() => {
                    this.reset();
                  }}
                  className="clear-btn"
                >
                  Clear
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    this.onNumClick(7);
                  }}
                  className="num-btn"
                >
                  7
                </button>
                <button
                  onClick={() => {
                    this.onNumClick(8);
                  }}
                  className="num-btn"
                >
                  8
                </button>
                <button
                  onClick={() => {
                    this.onNumClick(9);
                  }}
                  className="num-btn"
                >
                  9
                </button>
                <button
                  onClick={() => {
                    this.setOperator("/");
                  }}
                  disabled={!enableOperator}
                  className="num-btn operator"
                >
                  /
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    this.onNumClick(4);
                  }}
                  className="num-btn"
                >
                  4
                </button>
                <button
                  onClick={() => {
                    this.onNumClick(5);
                  }}
                  className="num-btn"
                >
                  5
                </button>
                <button
                  onClick={() => {
                    this.onNumClick(6);
                  }}
                  className="num-btn"
                >
                  6
                </button>
                <button
                  onClick={() => {
                    this.setOperator("*");
                  }}
                  disabled={!enableOperator}
                  className="num-btn operator"
                >
                  *
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    this.onNumClick(1);
                  }}
                  className="num-btn"
                >
                  1
                </button>
                <button
                  onClick={() => {
                    this.onNumClick(2);
                  }}
                  className="num-btn"
                >
                  2
                </button>
                <button
                  onClick={() => {
                    this.onNumClick(3);
                  }}
                  className="num-btn"
                >
                  3
                </button>
                <button
                  onClick={() => {
                    this.setOperator("+");
                  }}
                  disabled={!enableOperator}
                  className="num-btn operator"
                >
                  +
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    this.onNumClick(".");
                  }}
                  disabled={!enableDecimal}
                  className="num-btn operator"
                >
                  .
                </button>
                <button
                  onClick={() => {
                    this.onNumClick(0);
                  }}
                  className="num-btn"
                >
                  0
                </button>

                <button 
                  onClick={this.onSubmit}
                  disabled={!enableEquals}
                  className="equal-btn operator"
                >
                  =
                </button>
                <button
                  onClick={() => {
                    this.setOperator("-");
                  }}
                  disabled={!enableOperator}
                  className="num-btn operator"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

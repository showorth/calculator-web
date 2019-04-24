import React, { Component } from "react";
import "./calculator.css";

var numA = "";
var numB = "";
var operator = "";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.onNumClick = this.onNumClick.bind(this);
  }

  reset() {
    operator = "";
    numA = "";
    numB = "";
  }

  onNumClick(numValue) {
    var numString = numValue.toString();
    operator ? (numB += numString) : (numA += numString);
    console.log("First Number is... ", numA);
    console.log("Operator is... ", operator);
    console.log("Second Number is... ", numB);
  }

  onOperatorClick(opValue) {
    var numberA = Number(numA);
    var numberB = Number(numB);
    switch (opValue) {
      case "+":
        console.log(numberA + numberB);
        this.reset();
        break;
      case "-":
        console.log(numberA - numberB);
        this.reset();
        break;
      case "/":
        console.log(numberA / numberB);
        this.reset();
        break;
      case "*":
        console.log(numberA * numberB);
        this.reset();
        break;
      default:
        console.log("Not a valid operator");
    }
  }
  render() {
    return (
      <div className="Calculator">
        <div id="main">
          <h2>Stephanie's Little Calculator</h2>
          <div id="calculator">
            <div id="body">
              <input type="number" id="numInput" />
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
                    operator = "/";
                  }}
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
                    operator = "*";
                  }}
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
                    operator = "+";
                  }}
                  className="num-btn operator"
                >
                  +
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    var decimal = ".";
                    operator ? (numB += decimal) : (numA += decimal);
                  }}
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
                  onClick={() => {
                    this.onOperatorClick(operator);
                  }}
                  className="equal-btn operator"
                >
                  =
                </button>
                <button
                  onClick={() => {
                    operator = "-";
                  }}
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

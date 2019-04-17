import React, { Component } from "react";
import "./calculator.css";

var numA = [];

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.onNumClick = this.onNumClick.bind(this);
  }

  onNumClick(numValue) {
    console.log(numValue);
  }

  onTestClick(numValue) {
    numA.push(numValue);
    console.log(numA);
  }


  onOperatorClick(operator) {
    switch (operator) {
      case "+":
        console.log("+");
        break;
      case "-":
        console.log("-");
        break;
      case ".":
        console.log(".");
        break;
      case "=":
        console.log("=");
        break;
      default:
        console.log("Not a valid operator");
    }
  }
  render() {
    return (
      <div className="Calculator">
        <div id="main">
          <h1>Stephanie's Little Calculator</h1>
          <p>This is a calculator.</p>
          <div id="calculator">
            <div id="heading">Calculator</div>
            <div id="body">
              <input type="number" id="numInput" />

              <div id="display">
                <div>
                  <button
                    onClick={() => {
                      this.onTestClick(7);
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
                      this.onOperatorClick("+");
                    }}
                    className="num-btn operator"
                  >
                    +
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
                      this.onOperatorClick("-");
                    }}
                    className="num-btn operator"
                  >
                    -
                  </button>
                </div>
                <div style={{ width: 186 }}>
                  <div className="inline-block">
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
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          this.onNumClick(0);
                        }}
                        className="zero-btn"
                      >
                        0
                      </button>
                      <button
                        onClick={() => {
                          this.onOperatorClick(".");
                        }}
                        className="num-btn operator"
                      >
                        .
                      </button>
                    </div>
                  </div>
                  <div className="inline-block" style={{ float: "right" }}>
                    <button
                      onClick={() => {
                        this.onOperatorClick("=");
                      }}
                      className="equal-btn operator "
                    >
                      =
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

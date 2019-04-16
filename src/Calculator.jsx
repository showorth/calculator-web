import React, { Component } from 'react';
import logo from './logo.svg';
import './calculator.css';

class Calculator extends Component {
    render() {
        return (
            <div className="Calculator">

                <div id="main">
                    <h1>Stephanie's Little Calculator</h1>
                    <p>This is a calculator.</p>
                    <div id="calculator">
                        <div id="heading">
                            Calculator
            </div>
                        <div id="body">
                            <input type="number" id="numInput" />

                            <div id="display">
                                <div>
                                    <button class="num-btn">
                                        7
                        </button>
                                    <button class="num-btn">
                                        8
                        </button>
                                    <button class="num-btn">
                                        9
                        </button>
                                    <button class="num-btn operator">
                                        +
                        </button>
                                </div>
                                <div>
                                    <button class="num-btn">
                                        4
                        </button>
                                    <button class="num-btn">
                                        5
                        </button>
                                    <button class="num-btn">
                                        6
                        </button>
                                    <button class="num-btn operator">
                                        -
                        </button>
                                </div>
                                <div style={{width: 186}}>
                                    <div class="inline-block">
                                        <div>
                                            <button class="num-btn">
                                                1
                                </button>
                                            <button class="num-btn">
                                                2
                                </button>
                                            <button class="num-btn">
                                                3
                                </button>
                                        </div>
                                        <div>
                                            <button class="zero-btn">
                                                0
                                </button>
                                            <button class="num-btn operator">
                                                .
                                </button>
                                        </div>
                                    </div>
                                    <div class="inline-block" style={{float: 'right'}}>
                                        <button class="equal-btn operator ">
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

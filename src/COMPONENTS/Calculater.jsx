import { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            input: ""
        };
    }

    inputValue = (event) => {
        this.setState({ input: event.target.value });
    };

    appendNumber = (number) => {
        this.setState({ input: this.state.input + number });
    };

    appendOperator = (operator) => {
        if (this.state.input !== "") {
            this.setState({ input: this.state.input + operator });
        }
    };

    appendDecimal = () => {
        if (!this.state.input.includes(".")) {
            this.setState({ input: this.state.input + "." });
        }
    };

    clearScreen = () => {
        this.setState({ input: "" });q
    };

    calculate = () => {
        try {
            this.setState({ input: eval(this.state.input).toString() });
        } catch(error) {
            this.setState({ input: "Error" });
        }
    };

    render() {
        return (
            <div className="calculator">
                <input type="text" className="screen" value={this.state.input} onChange={this.inputValue} disabled />
                <div className="buttons">
                    {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", 0, ".", "C", "/", "="]
                        .map((char) => (
                            <button key={char} 
                                onClick={() => {
                                    if (char === "C") this.clearScreen();
                                    else if (char === "=") this.calculate();
                                    else if (char === ".") this.appendDecimal();
                                    else if (["+", "-", "*", "/"].includes(char)) this.appendOperator(char);
                                    else this.appendNumber(char);
                                }}
                            >
                                {char}
                            </button>
                        ))}
                </div>
            </div>
        );
    }
}

export default Calculator;

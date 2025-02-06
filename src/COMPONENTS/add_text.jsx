import { Component } from "react";
import "./Addmessage.css";

class Addmessage extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            addtext: ["home", "house"]
        };
    }

    textchange = (event) => {
        this.setState({ text: event.target.value });
    };

    addtextmessage = () => {
        if (this.state.text.trim() !== "") {
            this.setState({ addtext: [...this.state.addtext, this.state.text], text: "" });
        }
    };

    deletetextmessage = () => {
        this.setState({ addtext: this.state.addtext.filter(item => item !== this.state.text) });
    };

    render() {
        return (
            <div className="container">
                <h1 className="title">Add Text</h1>
                <input type="text" className="input" placeholder="Enter the text.." value={this.state.text} onChange={this.textchange}/>
                <div className="buttons">
                    <button className="add-button" onClick={this.addtextmessage}>Add</button>
                    <button className="delete-button" onClick={this.deletetextmessage}>Delete</button>
                </div>
                <ul className="list">
                    {this.state.addtext.map((item, index) => (
                        <li key={index} className="list-item">{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Addmessage;

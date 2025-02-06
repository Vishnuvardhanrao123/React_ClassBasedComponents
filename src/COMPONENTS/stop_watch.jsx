import React, { Component } from "react";

class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      time: 0, 
      running: false,
    };
    this.timer = null;
  }

  start = () => {
    if (!this.state.running) {
      this.setState({ running: true });
      this.timer = setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000);
    }
  };

  stop = () => {
    clearInterval(this.timer);
    this.setState({ running: false });
  };

  reset = () => {
    clearInterval(this.timer);
    this.setState({ time: 0, running: false });
  };

  formatTime = () => {
    let h = Math.floor(this.state.time / 3600);
    let m = Math.floor((this.state.time % 3600) / 60);
    let s = this.state.time % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Stopwatch</h1>
        <h2>{this.formatTime()}</h2>
        <button onClick={this.start} disabled={this.state.running}>Start</button>
        <button onClick={this.stop} disabled={!this.state.running}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;

import React, { Component } from "react";
import "./Cube.css";
export class Cube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      pX: Math.round(Math.random() * 45) * 10,
      pY: Math.round(Math.random() * 45) * 10,
      count: 0,
    };
  }
  move = (op) => {
    const { x, y } = this.state;
    switch (op) {
      case "t":
        this.setState({
          y: y > 0 ? y - 10 : y,
        });
        break;
      case "b":
        this.setState({
          y: y < 450 ? y + 10 : y,
        });

        break;
      case "l":
        this.setState({
          x: x > 0 ? x - 10 : x,
        });
        break;
      case "r":
        this.setState({
          x: x < 450 ? x + 10 : x,
        });
        break;
      default:
        break;
    }
    this.checkPoint();
  };
  checkPoint = () => {
    const { x, y, pX, pY, count } = this.state;
    if (x === pX && y === pY) {
      this.setState({
        ...this.state,
        pX: Math.round(Math.random() * 45) * 10,
        pY: Math.round(Math.random() * 45) * 10,
        count: count + 1,
      });
    }
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <div className="wrapper">
          <div
            className="box"
            style={{
              marginTop: this.state.y + "px",
              marginLeft: this.state.x + "px",
            }}
          ></div>
          <div
            className="point"
            style={{ top: this.state.pY + "px", left: this.state.pX + "px" }}
          ></div>
        </div>
        <button onClick={() => this.move("t")}>&#8593;</button>
        <button onClick={() => this.move("l")}>&#8592;</button>
        <button onClick={() => this.move("r")}>&#8594;</button>
        <button onClick={() => this.move("b")}>&#8595;</button>
      </div>
    );
  }
}

export default Cube;

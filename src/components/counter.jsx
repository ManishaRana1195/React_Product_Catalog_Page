import React, { Component } from "react";

class Counter extends Component {
  state = { count: 1, image_url: "https://picsum.photos/200" };
  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <img src={this.state.image_url} alt="randome img"></img>
        <button>Increment</button>
      </div>
    );
  }
}

export default Counter;

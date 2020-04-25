import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };
  render() {

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.state.count}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

    getBadgeClasses() {
        let spanClass = "badge m-2 badge-";
        spanClass += this.state.count === 0 ? "warning" : "primary";
        return spanClass;
    }
}

export default Counter;

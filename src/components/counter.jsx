import React, { Component } from "react";

class Counter extends Component {
  /*state is local to each component and gets executed only once when page loads*/

  /* If the parent component  can initialize it once, to update its children, we should avoid
    having, two states for component, one local and one maintained by parent in props*/

  /* So, we don't need state here*/
  //state = { value: this.props.counter.value };

  getBadgeClasses() {
    let spanClass = "badge m-2 badge-";
    spanClass += this.props.counter.value === 0 ? "warning" : "primary";
    return spanClass;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrementHandle(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;

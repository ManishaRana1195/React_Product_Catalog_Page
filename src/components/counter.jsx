import React, { Component } from "react";

class Counter extends Component {
  state = { value: this.props.value };

  getBadgeClasses() {
    let spanClass = "badge m-2 badge-";
    spanClass += this.state.value === 0 ? "warning" : "primary";
    return spanClass;
  }

  handleIncrement = dummyValue => {
    /* in javascript, "this" can be different values based on 
      how is parent method invokee. here this is undefined, to 
      prevent that we use arrow notation = () => 
      state in React needs to be manually updated. React 
      wont read the updated state automatically*/
    this.setState({ value: this.state.value + 1 });
    console.log(dummyValue);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.state.value}</span>
        <button
          onClick={() => this.handleIncrement(5)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;

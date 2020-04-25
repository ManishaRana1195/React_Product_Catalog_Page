import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0, tags: ["tags1", "tags2", "tags3"] };

  render() {
    return (
      <div>
        {
            /* <span className={this.getBadgeClasses()}>{this.state.count}</span>
        <button className="btn btn-secondary btn-sm">Increment</button> */
        this.renderTagsList()
        }
      </div>
    );
  }


  renderTagsList() {
        if ( this.state.tags.length == 0) return <p>No tags!!</p>
        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>;
    }
//   getBadgeClasses() {
//     let spanClass = "badge m-2 badge-";
//     spanClass += this.state.count === 0 ? "warning" : "primary";
//     return spanClass;
//   }
}

export default Counter;

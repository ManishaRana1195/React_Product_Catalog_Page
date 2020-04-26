import React, { Component } from "react";
import Counter from "./counter";

/* in javascript, "this" can be different values based on 
      how is parent method invoke. here this is undefined, to 
      prevent that we use arrow notation = () => 
      state in React needs to be manually updated.
       React wont read the updated state automatically*/
// this.setState({ value: this.state.value + 1 });

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.resetCounter}
          className="btn btn-primary btn-sm"
        >
          Empty cart
        </button>

        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrementHandle={this.props.incrementCounter}
            onDelete={this.props.deleteCounter}
            counter={counter} // whatever props are passed, all of them should be passed to child
          />
        ))}
      </div>
    );
  }
}

export default Counters;

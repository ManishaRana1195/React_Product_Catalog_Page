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
    const {
      resetCounter,
      counters,
      incrementCounter,
      deleteCounter
    } = this.props;
    
    return (
      <div>
        <button onClick={resetCounter} className="btn btn-primary btn-sm">
          Empty cart
        </button>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrementHandle={incrementCounter}
            onDelete={deleteCounter}
            counter={counter} // whatever props are passed, all of them should be passed to child
          />
        ))}
      </div>
    );
  }
}

export default Counters;

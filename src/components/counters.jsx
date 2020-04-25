import React, { Component } from "react";
import Counter from "./counter";

/* in javascript, "this" can be different values based on 
      how is parent method invoke. here this is undefined, to 
      prevent that we use arrow notation = () => 
      state in React needs to be manually updated.
       React wont read the updated state automatically*/
// this.setState({ value: this.state.value + 1 });

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 1 },
      { id: 4, value: 1 }
    ]
  };

  handleDelete = componentId => {
    const counters = this.state.counters.filter(
      counter => counter.id != componentId
    );
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    /*The terrible process of modifying the state of counters array */
    // clone the array
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);

    // copy the old counter object and store at new place
    newCounters[index] = { ...counter }; 
    newCounters[index].value++;

    //update the state
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary btn-sm">
          Empty cart
        </button>

        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrementHandle={() => this.handleIncrement(counter)}
            onDelete={() => this.handleDelete(counter.id)}
            counter={counter} // whatever props are passed, all of them should be passed to child
          />
        ))}
      </div>
    );
  }
}

export default Counters;

import React, { Component } from "react";
import Counter from "./counter";

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
    console.log("parent delete method called", componentId);
    const counters = this.state.counters.filter(
      counter => counter.id != componentId
    );
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={() => this.handleDelete(counter.id)}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

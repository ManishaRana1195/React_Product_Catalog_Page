import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
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

  handleDecrement = counter => {
    const newCounterArray = [...this.state.counters];
    const index = newCounterArray.indexOf(counter);
    newCounterArray[index] = { ...counter };
    newCounterArray[index].value--;

    this.setState({ counters: newCounterArray });
  };

  render() {
    return (
      <div>
        <Navbar counters={this.state.counters} />
        <main style={{ marginTop: "20px" }}>
          <Counters
            counters={this.state.counters}
            resetCounter={this.handleReset}
            incrementCounter={this.handleIncrement}
            decrementCounter={this.handleDecrement}
            deleteCounter={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}

export default App;

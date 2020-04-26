import React, { Component } from "react";

class Navbar extends Component {
  getItemsCount() {
    let sum = 0;
    for (let i = 0; i < this.props.counters.length; i++) {
      sum += this.props.counters[i].value;
    }

    return sum;
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          My Ecommerce Site
        </a>
        <a className="navbar-brand" href="#">
          My Cart
          <span className="badge badge-pill badge-secondary">
            {this.getItemsCount()}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;

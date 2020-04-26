import React, { Component } from "react";

class Counter extends Component {
  /*state is local to each component and gets executed only once when page loads*/

  /* If the parent component  can initialize it once, to update its children, we should avoid
    having, two states for component, one local and one maintained by parent in props*/

  /* So, we don't need state here*/
  //state = { value: this.props.counter.value };


  render() {
    const { counter } = this.props;
    return (
      <div>
        <div className="col-md-4">
          <div
            className="card mb-4 box-shadow"
            style={{ width: "18rem", display: "inline-block" }}
          >
            <img
              src="https://picsum.photos/300"
              className="card-img-top"
              alt="shirt"
            />
            <div className="card-body">
              <h5 className="card-title">{counter.value}</h5>
              <br></br>
              <div class="btn-group">
                <button
                  type="button"
                  onClick={() => this.props.onIncrementHandle(counter)}
                  class="btn btn-sm btn-outline-secondary"
                >
                  +
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  -
                </button>
                <button
                  type="button"
                  onClick={() => this.props.onDelete(counter.id)}
                  class="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;

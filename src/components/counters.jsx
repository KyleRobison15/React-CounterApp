import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // To make our code cleaner, it is best practice to use object destructuring to extract the properties from the props object
    // This way we do not have to repeatedly use this.props.<property>, instead we can just use the property name
    // Remember in object destructuring, we:
    // 1. Define a new variable(s) using curly brace notation
    // 2. Each variable will be assigned to the property name we get from whatever object we are destructuring

    console.log("Counters - Rendered");

    let { counters, onReset, onDelete, onIncrement, onDecrement } = this.props;

    return (
      <div>
        <button
          // We must set the value of our event attribute for this button to the onReset property
          // The onReset property is available to us because we defined it and it's corresponding handler in the app component
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

// This is a controlled component because:
// It does not have any of it's own local state
// It recieves data and methods to handle the data via props (defined in the app component that is controlling it)

import React, { Component } from "react";
export default class Counter extends Component {
  ///////////////////////////////////////////////////////// STATE /////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////// HELPER METHODS //////////////////////////////////////////////////
  // handleIncrement = () => {
  //   // We use an arrow function here so that "this" is inherited from the Component object
  //   // Must call the setState() method and pass the new object with properties to override/merge
  //   this.setState({ value: this.state.value + 1 });
  // };

  // This method will get called only when the state or props of a component changes
  // This lifecycle hook is handy for comparing the old state/props of the component with the new state/props of the component
  // That makes this a good place to schedule an AJAX call to get new data from the server ONLY when part of the component has changed (optimization technique)
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    // if(prevProps.counter.value !== this.props.counter.value){
    //   // Ajax call and get new data from the server
    // }
  }

  // This method will get called just before a component is removed from the DOM
  // That makes this a good place to do some cleanup if we want to
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  getBadgeClasses() {
    return this.props.counter.value === 0
      ? "badge text-bg-warning m-2"
      : "badge text-bg-primary m-2";
  }

  formatCount() {
    /// BAD CODE ////
    // if (this.state.count === 0) {
    //   return "Zero";
    // } else {
    //   return this.state.count;
    // }

    //// GOOD CODE ////
    // Object destructuring:
    // Here we are declaring a new variable, and setting it to the count property of the state object. The new variable is called count by default.
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  /////////////////////////////////////////////////////// RENDER METHOD //////////////////////////////////////////////////
  render() {
    let { onIncrement, onDecrement, onDelete } = this.props;

    console.log("Counter - Rendered");
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => {
              onIncrement(this.props.counter);
            }}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => {
              this.props.onDecrement(this.props.counter);
            }}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

/////////////////////////////////////////////////////// NOTES //////////////////////////////////////////////////
/*
RENDERING LISTS:
* We can render lists dynamically using the map array
* Reference the array in our state object in the render method and map the array to a JSX expression

RENDERING THINGS CONDITIONALLY:
* There are two popular ways to do this:
1. New Helper Method that has if else statements where we return JSX Expressions depending on the condition evaluation
    * Then in our render method, we call the helper method
2. Using JS Truthy and Falsey principles, we can use the && logical operator after a boolean expression
    * JS evaluates the first side of the && and if true, will then evaluate the second side of the &&
    * If both sides of the && are truthy, JS will return the last operand

HANDLING EVENTS:
* All React elements have properties that are based on the standard DOM events
    * onClick
    * onDoubleClick
    * onKeyDown.. etc
* In react we can reference helper functions from our component, within the DOM event properties
* However, when we reference the helper function it is a standalone function, which will re-bind the "this" keyword to Window
    * To solve this problem, we can do 1 of 2 things:
        1. Define a constructor (to create a new instance of the component object)
            * Bind the value of this to the current object, and set that to the function
        2. Convert the function to an arrow function (so that this keyword is inherited)

LIFECYCLE HOOKS:
UPDATING PHASE:
* When the state of any component changes, the render method gets called for that component, AND ALSO all that component's children
* That means that the entire tree of components under the parent gets rendered and we get a new react element for each component
** Note: Only the one part of the DOM that was updated get's changed even though the entire virtual DOM gets rendered













*/

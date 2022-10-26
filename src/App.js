import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleReset = () => {
    let counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  // Because the App component owns the state of counters and counter, we will modify any of their data here.
  // Thus we define our helper methods in this component, and allow the other components to get their state via props
  // Other components will then raise events to this component to be handled
  handleDecrement = (counter) => {
    let counters = [...this.state.counters]; // Get the counters from our state object and add them to a new array
    let index = counters.indexOf(counter); // Scan the counters array to find the counter that was passed in and return the index number
    counters[index] = { ...counter }; // Get the specific counter that was passed in, and spread it's properties so we can get to the value prop
    counters[index].value--; // Decrement the value of the counter that was passed in (this alters the counter in the counters array)
    this.setState({ counters }); // Call setState() to tell react the state of this component has changed so it will render a new react element
  };

  handleDelete = (counterId) => {
    let counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <div className="container">
        <NavBar
          totalCounters={
            this.state.counters.filter((counter) => counter.value > 0).length //return only the number of counters that have a value > 0
          }
        ></NavBar>
        <main className="container">
          <Counters
            counters={this.state.counters} //We are passing our counters to our counters component (so we can access it via props)
            //These attributes represent the events that will be raised to the app component
            //These attributes will be accessable by our counters component through the props object
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}
export default App;

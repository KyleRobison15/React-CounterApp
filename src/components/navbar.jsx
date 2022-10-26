import React, { Component } from "react";

// Here we will use a stateless functional component
// We can do this because we only have a single render method, and no state
// We do this by defining a function instead of a class for this component
//  1. We define a variable, and name it what we want the name of our component to be (ie. NavBar)
//  2. Assign the variable to an arrow function
//  3. Return a react element from the body of our arrow function
//  4. Finally we have to define props as a param of our function
// Instead of using 'this' to access our props object, React will pass it as an argument to this function at run time
// So we access our props directly (ie. line 20)

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge rounded-pill text-bg-primary">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "", 
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    //const value = event.target.value;
    //const name = event.target.name;
    const { name, value } = event.target;

    if (name === "password") {
      return this.setState({
        password: value.substring(0, 15)
      })
    }

    // Updating the input's state
    return this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // validation
    if(!this.state.firstName || !this.state.lastName) {
      return alert("First and Last Name must not be blank.")
    }

    if(this.state.password.length < 6){
      return alert("Password must be at least 6 characters.")
    }

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

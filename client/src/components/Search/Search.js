import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  // Setting the component's initial state
  state = {
    topic: "",
    startYear: "", 
    endYear: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    return this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

   // TODO: call the api to get the articles.  Pass the parameters needed
   // this.state.topic
   // this.state.startYear
   // this.state.endYear

   // Handle results?

    this.setState({
      topic: "",
      startYear: "",
      endYear: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
    <div>
      <div className="panel-heading">
          <h1>Search</h1>
      </div>
      <div className="panel-body">
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="topic">Topic:</label><br/>
              <input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                id="topic"
              />
            </div>
            <div className="form-group">
              <label htmlFor="startyear">Start Year:</label><br/>
              <input 
                value={this.state.startyear}
                onChange={this.handleInputChange}
                name="startyear"
                placeholder="YYYY" 
                id="startyear"
              />
            </div>
            <div className="form-group">
              <label htmlFor="endyear">End Year:</label><br/>
              <input 
                value={this.state.endyear}
                onChange={this.handleInputChange}
                name="endyear"
                placeholder="YYYY"
                id="endyear"
              />
            </div>
            <button type="submit" className="btn">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;

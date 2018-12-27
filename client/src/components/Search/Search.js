import React, { Component } from "react";
import "./Search.css";
import axios from "axios";

class Search extends Component {
  // Setting the component's initial state
  state = {
    topic: "",
    startYear: "", 
    endYear: "",
    articles: []
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
    console.log("Form Submit")

   // Call the NYT api to get the articles.  Pass the parameters needed
   const params = {
    "api-key"   : "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",  //trilogy api key
    "q"         : this.state.topic,
    "begin_date": `${this.state.startYear}0101`,
    "end_date"  : `${this.state.endYear}1231`
  };

   axios
   .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?", {params})
   .then(response => {
       console.log("Search successful.")
       const results = response.data.response.docs.map(a => ({
           "id"       : a._id,
           "title"    : a.headline.main,
           "byline"   : a.byline,
           "summary"  : a.snippet,
           "url"      : a.web_url,
           "date"     : a.pub_date
       }));

        // Handle results 
        this.setState({
          topic: "",
          startYear: "",
          endYear: "",
          articles: results
        });

   })
   .catch(error => {
       console.error(error);
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

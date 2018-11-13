import React, { Component } from "react";
import Preview from "./Preview";
import Suggestions from "./Suggestions";
import axios from "axios";

// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=10&query=burger&type=breakfast")
// .header("X-Mashape-Key", "C1gTxhVpsRmshDykImWCXif8xftRp1MBloEjsnj1BsP3IfyGMh")
// .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      type: "breakfast",
      results: [],
      selected: "",
      loadingPreview: true
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, loadingPreview: true });
  };

  findRecipes = async () => {
    try {
      const url = `${process.env.REACT_APP_API_HOST}search?number=10&query=${
        this.state.query
      }&type=${this.state.type}`;
      const response = await axios.get(url, {
        headers: {
          "X-Mashape-Key": `${process.env.REACT_APP_API_KEY}`
        }
      });
      this.setState({ results: response.data.results });
    } catch (error) {
      console.log(error.data);
    }
  };

  render() {
    const suggestions = this.state.results.length ? (
      <Suggestions
        results={this.state.results}
        handleChange={this.handleChange}
        selected={this.state.selected}
      />
    ) : null;

    const previews = this.state.selected ? (
      <Preview
        id={this.state.selected}
        key={this.state.selected}
        loading={this.state.loadingPreview}
      />
    ) : null;

    const saveButton = this.state.selected ? <button>SAVE</button> : null;

    return (
      <div>
        <input
          type="text"
          name="query"
          placeholder="Search Recipe..."
          onChange={this.handleChange}
          value={this.state.query}
        />
        <button onClick={this.findRecipes}>Search</button>
        {suggestions}
        {previews}
        {saveButton}
      </div>
    );
  }
}

export default Create;

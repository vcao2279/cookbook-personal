import React, { Component } from "react";
import Preview from "./Preview";
import scraper from "../utils/scraper";
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      type: "breakfast",
      loadingPreview: false,
      og_title: "",
      og_sitename: "",
      og_image: "",
      og_desc: "",
      prep_time: "",
      cook_time: "",
      total_time: "",
      rating: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, loadingPreview: false });
  };

  findRecipes = () => {
    this.setState({ loadingPreview: true }, async () => {
      try {
        const data = await scraper(this.state.query);
        this.setState({
          ...data,
          loadingPreview: false
        });
      } catch (error) {
        console.log(error.data);
      }
    });
  };

  render() {
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
        <Preview
          og_title={this.state.og_title}
          og_sitename={this.state.og_sitename}
          og_image={this.state.og_image}
          og_desc={this.state.og_desc}
          prep_time={this.state.prep_time}
          cook_time={this.state.cook_time}
          total_time={this.state.total_time}
          rating={this.state.rating}
          loading={this.state.loadingPreview}
        />
        {saveButton}
      </div>
    );
  }
}

export default Create;

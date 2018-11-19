import React, { Component } from "react";
import Preview from "./Preview";
import scraper from "../utils/scraper";
import styled from "styled-components";

const Content = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
`;

const StyledPreview = styled.div`
  grid-column: 1/3;
`;

const StyledFilter = styled.div`
  grid-column: 3/4;
`;
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
      servings: "",
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
    const saveButton = this.state.og_title ? <button>SAVE</button> : null;

    return (
      <Content>
        <StyledPreview>
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
            rating={this.state.rating}
            servings={this.state.servings}
            loading={this.state.loadingPreview}
          />
          {saveButton}
        </StyledPreview>
        <StyledFilter>
          <div className="recipe-btn">
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Dinner</button>
            <button>Dessert</button>
            <button>Snack</button>
          </div>
          <div className="input-calendar">placeholder</div>
        </StyledFilter>
      </Content>
    );
  }
}

export default Create;

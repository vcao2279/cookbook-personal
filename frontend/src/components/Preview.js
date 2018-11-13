import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const Section = styled.section`
  grid-area: main;
`;

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      loading: this.props.loading,
      title: "",
      readyInMinutes: null,
      servings: null,
      ingredients: [],
      instructions: "",
      image: ""
    };
  }

  componentDidMount() {
    if (this.state.id) {
      this.getRecipe(Number(this.state.id));
    }
  }

  getRecipe = async id => {
    const url = `${process.env.REACT_APP_API_HOST}${id}/information`;
    try {
      const { data } = await axios.get(url, {
        headers: {
          "X-Mashape-Key": `${process.env.REACT_APP_API_KEY}`
        }
      });

      const {
        title,
        readyInMinutes,
        servings,
        image,
        instructions,
        extendedIngredients
      } = data;

      const ingredients = extendedIngredients.map(i => i.name);

      this.setState({
        title,
        readyInMinutes,
        servings,
        image,
        instructions,
        ingredients,
        loading: false
      });
    } catch (error) {
      console.log(error.data);
    }
  };

  render() {
    const preview = this.state.loading ? (
      <div>Loading...</div>
    ) : (
      <React.Fragment>
        <header>{this.state.title}</header>
        <img
          src={this.state.image}
          alt={this.state.title}
          style={{ height: "160px", width: "270" }}
        />
        <div>
          Prep Time: {this.state.readyInMinutes}, Servings:{" "}
          {this.state.servings}
        </div>
        <div>Ingredients: {this.state.ingredients.join(", ")}</div>
        <div>Instruction: {this.state.instructions}</div>
      </React.Fragment>
    );

    // if (this.props.id) {
    //   const {
    //     title,
    //     readyInMinutes,
    //     servings,
    //     image,
    //     instructions,
    //     ingredients
    //   } = this.getRecipe(this.props.id);
    //   console.log(
    //     title,
    //     readyInMinutes,
    //     servings,
    //     image,
    //     instructions,
    //     ingredients
    //   );
    // }
    // preview = (
    // );
    // return { preview };
    console.log(this.state);
    return <Section>{preview}</Section>;
  }
}

export default Preview;

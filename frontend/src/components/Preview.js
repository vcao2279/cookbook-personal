import React from "react";
import styled from "styled-components";

const Preview = props => {
  const recipe = {
    title: "BASIC FRENCH OMELET RECIPE",
    img:
      "https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/basic-french-omelet-930x550.jpg",
    readyInMinutes: 7,
    servings: 1,
    ingredients: ["eggs", "water", "salt", "pepper", "butter", "chopped ham"],
    instructions:
      "BEAT eggs, water, salt and pepper in small bowl until blended. HEAT butter in 6 to 8-inch nonstick omelet pan or skillet over medium-high heat until hot. TILT pan to coat bottom. POUR IN egg mixture. Mixture should set immediately at edges. GENTLY PUSH cooked portions from edges toward the center with inverted turner so that uncooked eggs can reach the hot pan surface. CONTINUE cooking, tilting pan and gently moving cooked portions as needed. When top surface of eggs is thickened and no visible liquid egg remains, PLACE filling on one side of the omelet. FOLD omelet in half with turner. With a quick flip of the wrist, turn pan and INVERT or SLIDE omelet onto plate. SERVE immediately."
  };

  return (
    <section>
      <header>{recipe.title}</header>
      <img
        src={recipe.img}
        alt={recipe.title}
        style={{ height: "160px", width: "270" }}
      />
      <div>
        Prep Time: {recipe.readyInMinutes}, Servings: {recipe.servings}
      </div>
      <div>Ingredients: {recipe.ingredients.join(", ")}</div>
      <div>Instruction: {recipe.instructions}</div>
    </section>
  );
};

export default Preview;

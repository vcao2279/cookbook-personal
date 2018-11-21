import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const LIST_RECIPES = gql`
  query AllRecipes {
    recipes {
      id
      title
      image
      readyInMinutes
      servings
      createBy {
        id
        name
        email
      }
    }
  }
`;

const Recipes = () => {
  return (
    <Query query={LIST_RECIPES}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error...</p>;

        return (
          <div>
            {!loading &&
              data.recipes.map(recipe => (
                <div key={recipe.id}>
                  <p>{recipe.title}</p>
                  <p>{recipe.image}</p>
                  <p>{recipe.readyInMinutes}</p>
                  <p>{recipe.servings}</p>
                </div>
              ))}
          </div>
        );
      }}
    </Query>
  );
};

export default Recipes;

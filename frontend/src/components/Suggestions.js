import React from "react";
import styled from "styled-components";

const Selection = styled.div`
  margin: 10px 0 10px;
`;

const Suggestions = props => {
  return (
    <Selection>
      <div>
        Select one of the following suggestions to see a preview of the recipe:
      </div>
      <select
        name="selected"
        value={props.selected}
        onChange={props.handleChange}
      >
        <option />
        {props.results.map(recipe => (
          <option value={recipe.id} key={recipe.id}>
            {recipe.title}
          </option>
        ))}
      </select>
    </Selection>
  );
};

export default Suggestions;

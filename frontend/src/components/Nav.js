import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.ul`
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  grid-area: sidebar;
  height: 100vh;
`;

const Li = styled.li`
  margin-top: 10px;
`;

const Nav = () => {
  return (
    <Navbar>
      <Li>
        <Link to="/home/create">Create</Link>
      </Li>
      <Li>
        <Link to="/home/recipes">Recipes</Link>
      </Li>
      <Li>
        <Link to="/home/calendar">Calendar</Link>
      </Li>
      <Li>
        <Link to="/home/dashboard">Grocery List</Link>
      </Li>
      <Li>
        <Link to="/home/settings">Settings</Link>
      </Li>
      <Li>
        <Link to="/home/billing">Billing</Link>
      </Li>
    </Navbar>
  );
};

export default Nav;

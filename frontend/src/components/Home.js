import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Content = styled.div`
  display: grid;
  grid-template-areas:
    "header header header header"
    "sidebar main main main"
    "footer footer footer footer";
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Header = styled.div`
  padding: 20px;
  border: 1px solid red;
  grid-area: header;
`;

class Home extends Component {
  render() {
    return (
      <Content>
        <Header>
          <Link to="/home">
            <div>Home</div>
          </Link>
        </Header>
        <Nav />
      </Content>
    );
  }
}

export default Home;

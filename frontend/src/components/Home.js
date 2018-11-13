import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Create from "./Create";
import Recipes from "./Recipes";
import Calendar from "./Calendar";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Billing from "./Billing";

const Content = styled.div`
  display: grid;
  grid-template-areas:
    "header header header header"
    "pathname pathname pathname pathname"
    "navbar main main sidebar"
    "footer footer footer footer";
  grid-template-rows: auto;
  grid-template-columns: 1fr 2fr 2fr 2fr;
`;

const Header = styled.div`
  padding: 20px;
  border: 1px solid red;
  grid-area: header;
`;

const Main = styled.div`
  padding: 20px;
  grid-area: main;
`;

const Path = styled.div`
  padding: 20px;
`;

class Home extends Component {
  render() {
    let current = this.props.location.pathname.split("/").pop();
    current =
      current === "home" ? null : current[0].toUpperCase() + current.slice(1);
    return (
      <Content>
        <Header>
          <Link to="/home">
            <div>Home</div>
          </Link>
        </Header>
        <Path>
          <Link to="/home">Home</Link> / {current}
        </Path>
        <Nav />
        <Main>
          <Route path="/home/create" component={Create} />
          <Route path="/home/recipes" component={Recipes} />
          <Route path="/home/calendar" component={Calendar} />
          <Route path="/home/dashboard" component={Dashboard} />
          <Route path="/home/settings" component={Settings} />
          <Route path="/home/billing" component={Billing} />
        </Main>
      </Content>
    );
  }
}

export default Home;

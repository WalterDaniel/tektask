import React, { Component } from "react";

import styled from "styled-components";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Content from "./components/content/content";

import SidebarState from "./__mock__/sidebar/sidebarState";
import { Alert } from "react-bootstrap";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
`;

const Main = styled.main`
  background: #f5f5f5;
  width: 100%;
  min-height: 100vh;
`;

class App extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      sidebar: {
        collapsed: false,
        sections: []
      }
    };

    this.handleSidebarCollapseToggle = this.handleSidebarCollapseToggle.bind(
      this
    );
    this.handleSectionCollapseToggle = this.handleSectionCollapseToggle.bind(
      this
    );
    this.getAllLinks = this.getAllLinks.bind(this);
  }

  handleSidebarCollapseToggle() {
    const sidebar = this.state.sidebar;
    const { collapsed } = sidebar;
    sidebar.collapsed = !collapsed;

    this.setState(sidebar);
  }

  handleSectionCollapseToggle(section) {
    const sidebar = this.state.sidebar;
    const sections = [...sidebar.sections];
    const index = sections.indexOf(section);
    sections[index] = { ...section };
    sections[index].open = !section.open;
    sidebar.sections = sections;
    this.setState(sidebar);
  }

  getAllLinks() {
    const sidebar = this.state.sidebar;
    const sections = [...sidebar.sections];
    return [].concat.apply(
      [],
      sections.map(section => {
        const { links } = section;
        return [...links];
      })
    );
  }

  componentWillMount() {
    const { sidebar } = SidebarState;

    this.setState({
      sidebar: sidebar
    });
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <Sidebar
            sidebarStatus={this.state.sidebar}
            onSidebarCollapseToggle={this.handleSidebarCollapseToggle}
            onSectionCollapseToggle={this.handleSectionCollapseToggle}
          />
          <Main>
            <Switch>
              {this.getAllLinks().map((link, key) => (
                <Route
                  key={key}
                  path={link.href}
                  render={props => <Header {...props} pageTitle={link.value} />}
                />
              ))}
              <Route
                render={props => <Header {...props} pageTitle={"Home"} />}
              />
            </Switch>

            <div>
              <Switch>
                {this.getAllLinks().map((link, key) => (
                  <Route
                    key={key}
                    path={link.href}
                    render={props => <Content {...props} extra={link} />}
                  />
                ))}
                <Route
                  render={() => (
                    <Alert variant={"info"}>
                      No hay contenido, use el nav del sidebar.
                    </Alert>
                  )}
                />
              </Switch>
            </div>
          </Main>
        </Wrapper>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";

import "./common/reset.css";
import styled from "styled-components";
import Sidebar from "./components/sidebar/sidebar";
import Icon from "./components/icon/icon";

import SidebarState from "./__mock__/sidebar/sidebarState";

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

        this.state = {};

        this.handleSidebarCollapseToggle = this.handleSidebarCollapseToggle.bind(
            this
        );
    }

    handleSidebarCollapseToggle() {
        const sidebar = this.state.sidebar;
        const {collapsed} = sidebar;
        sidebar.collapsed = !collapsed;

        this.setState(sidebar);
    }

    componentWillMount() {
        const {sidebar} = SidebarState;

        this.setState({
            sidebar: sidebar
        });
    }

  render() {
    return (
      <Wrapper>
          <Sidebar
              sidebarStatus={this.state.sidebar}
              onSidebarCollapseToggle={this.handleSidebarCollapseToggle}
          />
        <Main>
          <header>
              My very first project <Icon icon={"GradeOutlined"}/>
          </header>
          <h2>Content</h2>
        </Main>
      </Wrapper>
    );
  }
}

export default App;

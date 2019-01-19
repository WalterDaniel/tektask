import React, { Component } from "react";

import "./common/reset.css";
import GradeOutlined from "@material-ui/icons/GradeOutlined";
import styled from "styled-components";
import Sidebar from "./components/sidebar/sidebar";

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
            sidebarCollapsed: false
        };

        this.handleSidebarCollapseToggle = this.handleSidebarCollapseToggle.bind(
            this
        );
    }

    handleSidebarCollapseToggle() {
        const sidebarCollapsedStatus = this.state.sidebarCollapsed;
        this.setState({sidebarCollapsed: !sidebarCollapsedStatus});
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
              My very first project <GradeOutlined/>
          </header>
          <h2>Content</h2>
        </Main>
      </Wrapper>
    );
  }
}

export default App;

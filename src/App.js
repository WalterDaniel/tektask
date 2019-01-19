import React, { Component } from "react";

import "./common/reset.css";
import styled from "styled-components";
import Sidebar from "./components/sidebar/sidebar";
import Icon from "./components/icon/icon";

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
                sections: [
                    {
                        iconName: "Dashboard",
                        name: "Dashboard",
                        links: [
                            {
                                iconName: "ViewWeek",
                                href: "/dashboard/my_week",
                                value: "My Week"
                            }
                        ]
                    },
                    {
                        iconName: "DeveloperBoard",
                        name: "My Projects",
                        links: [
                            {
                                iconName: "StarRate",
                                href: "/my_projects/test",
                                value: "Test"
                            }
                        ]
                    },
                    {
                        iconName: "People",
                        name: "Team",
                        links: [
                            {
                                iconName: "PeopleOutline",
                                href: "/team/front_end",
                                value: "Front End"
                            }
                        ]
                    }
                ]
            }
        };

        this.handleSidebarCollapseToggle = this.handleSidebarCollapseToggle.bind(
            this
        );
    }

    handleSidebarCollapseToggle() {
        const sidebarCollapsedStatus = this.state.sidebar.collapsed;

        this.setState({sidebar: {collapsed: !sidebarCollapsedStatus}});
    }

    // componentWillMount() {
    //   const value = $("#rc_seo_subscription_wsMonthsQuantity").val();
    //   const wsMonthsQuantityData = value ? JSON.parse(value) : [];
    //
    //   this.setState({
    //     websites: [...wsMonthsQuantityData]
    //   });
    // }

  render() {
    return (
      <Wrapper>
          <Sidebar
              collapsed={this.state.sidebarCollapsed}
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

import React from "react";
import styled from "styled-components";
import Logo from "../logo/logo";
import CollapseToggleBtn from "./collapse-toggle-btn";

const navWidthCollapsed = 66;
const navWidthExpanded = 243;

// SideNav
const Sidebar = styled.div`
  background-color: #fff;
  border-right: 1px solid #ddd;
  width: ${props => (props.collapsed ? navWidthCollapsed : navWidthExpanded)}px;
  min-width: ${props =>
    props.collapsed ? navWidthCollapsed : navWidthExpanded}px;
  max-width: ${props =>
    props.collapsed ? navWidthCollapsed : navWidthExpanded}px;
  height: 100vh;
  transition: all 0.3s;
`;

const LogoContainer = styled.div`
  min-height: 50px;
  max-height: 50px;
  padding: 10px;
  overflow: hidden;
  background-color: #2f3436;
`;

const CollapseToggleBtnContainer = styled.div`
  position: absolute;
  bottom: 250px;
  left: ${props =>
    (props.collapsed ? navWidthCollapsed : navWidthExpanded) - 13}px;
  transition: all 0.3s;
`;

export default ({collapsed, onSidebarCollapseToggle}) => {
  return (
    <Sidebar collapsed={collapsed}>
        <LogoContainer collapsed={collapsed}>
            <Logo/>
        </LogoContainer>

        <CollapseToggleBtnContainer collapsed={collapsed}>
            <CollapseToggleBtn
                collapsed={collapsed}
                onSidebarCollapseToggle={onSidebarCollapseToggle}
            />
        </CollapseToggleBtnContainer>

      <ul>
        <li>
            <a href="/dashboard">Dashboard</a>
        </li>
        <li>
            <a href="/myprojects">My Projects</a>
        </li>
        <li>
            <a href="/team">Team</a>
        </li>
      </ul>
    </Sidebar>
  );
};

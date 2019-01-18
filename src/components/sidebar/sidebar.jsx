import React from "react";
import styled from "styled-components";
import Logo from "../logo/logo";

// SideNav
const Sidebar = styled.div`
  background-color: #fff;
  border-right: 1px solid #ddd;
  width: 243px;
  height: 100vh;
  min-width: 243px;
  max-width: 243px;
`;

const LogoContainer = styled.div`
  min-height: 50px;
  max-height: 50px;
  padding: 10px;
  overflow: hidden;
  background-color: #2f3436;
`;

export default ({ collapsed }) => {
  return (
    <Sidebar collapsed={collapsed}>
        <LogoContainer collapsed={collapsed}>
            <Logo/>
        </LogoContainer>

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

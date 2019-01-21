import React from "react";
import LogoImg from "../logo/logo";
import styled from "styled-components";

const CompanyBrandContainer = styled.div`
  height: 80px;
  overflow: hidden;
  background-color: #2f3436;
  display: flex;
  justify-items: stretch;

  a {
    display: flex;
    width: ${props => props.sidebarWidth}px;

    svg {
      margin-top: 22px;
      margin-left: 16px;
      height: 35px;
      width: ${props => props.collapsed && 35}px;
    }
  }
`;

export default ({ collapsed, sidebarWidth }) => {
  return (
    <CompanyBrandContainer collapsed={collapsed} sidebarWidth={sidebarWidth}>
      <a href="/" title="TekTask" rel="home">
        <LogoImg collapsed={collapsed} />
      </a>
    </CompanyBrandContainer>
  );
};

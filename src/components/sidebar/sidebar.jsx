import React from "react";
import styled from "styled-components";
import CompanyBrand from "../company-brand/company-brand";
import CollapseToggleBtn from "./collapse-toggle-btn";

import Section from "./sidebar-section";
import { ListGroup } from "react-bootstrap";

const sidebarCollapsedWidth = 66;
const sidebarExpandedWidth = 243;

const sidebarWidth = props =>
  props.collapsed ? sidebarCollapsedWidth : sidebarExpandedWidth;

const Sidebar = styled.div`
  background-color: #fff;
  width: ${sidebarWidth}px;
  min-width: ${sidebarWidth}px;
  max-width: ${sidebarWidth}px;
  height: 100vh;
  transition: all 0.3s;
  z-index: 1;
`;

const NavSections = styled.div`
  border-right: 1px solid #dadada;
  box-shadow: 0px 0 20px 0px rgba(0, 0, 0, 0.2);
  height: calc(100vh - 80px);
`;

const StyledCollapseToggleBtn = styled(CollapseToggleBtn)`
  position: absolute;
  bottom: 50px;
  left: calc(${sidebarWidth}px - 13px);
  transition: all 0.3s;
`;

const StyledListGroupItem = styled(ListGroup.Item)`
  && {
    padding: 0;
    border: 0;
  }
  &.current-section {
    background-color: #f5f5f5;
  }
`;

export default ({
  sidebarStatus,
  onSidebarCollapseToggle,
  onSectionCollapseToggle
}) => {
  const { collapsed, sections } = sidebarStatus;
  return (
    <Sidebar collapsed={collapsed}>
      <CompanyBrand
        collapsed={collapsed}
        sidebarWidth={sidebarWidth(collapsed)}
      />

      <StyledCollapseToggleBtn
        collapsed={collapsed}
        onSidebarCollapseToggle={onSidebarCollapseToggle}
      />

      <NavSections>
        {sections.length > 0 && (
          <ListGroup variant="flush">
            {sections.map((section, key) => (
              <div key={section.slug + key}>
                <StyledListGroupItem
                  className={
                    (collapsed ? " collapsed" : "") +
                    (key === 1 ? " current-section" : "")
                  }
                >
                  <Section
                    section={section}
                    onSectionCollapseToggle={onSectionCollapseToggle}
                    sidebarCollapsed={collapsed}
                  />
                </StyledListGroupItem>
              </div>
            ))}
          </ListGroup>
        )}
      </NavSections>
    </Sidebar>
  );
};

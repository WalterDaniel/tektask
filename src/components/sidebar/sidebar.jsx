import React from "react";
import styled from "styled-components";
import CompanyBrand from "../company-brand/company-brand";
import CollapseToggleBtn from "./collapse-toggle-btn";

import Section from "./sidebar-section";
import {ListGroup} from "react-bootstrap";

const sidebarCollapsedWidth = 66;
const sidebarExpandedWidth = 243;

const sidebarWidth = props =>
    props.collapsed ? sidebarCollapsedWidth : sidebarExpandedWidth;

// SideNav
const Sidebar = styled.div`
  background-color: #fff;
  border-right: 1px solid #dadada;
  width: ${sidebarWidth}px;
  min-width: ${sidebarWidth}px;
  max-width: ${sidebarWidth}px;
  height: 100vh;
  transition: all 0.3s;npm start
`;

const CollapseToggleBtnContainer = styled.div`
  position: absolute;
  bottom: 250px;
  left: calc(${sidebarWidth}px - 13px);
  transition: all 0.3s;
`;

const StyledListGroupItem = styled(ListGroup.Item)`
  &.current {
    background-color: #f5f5f5;
  }
`;

export default ({
                    sidebarStatus,
                    onSidebarCollapseToggle,
                    onSectionCollapseToggle
                }) => {
    const {collapsed, sections} = sidebarStatus;
  return (
    <Sidebar collapsed={collapsed}>
        <CompanyBrand
            collapsed={collapsed}
            sidebarWidth={sidebarWidth(collapsed)}
        />

        <CollapseToggleBtnContainer collapsed={collapsed}>
            <CollapseToggleBtn
                collapsed={collapsed}
                onSidebarCollapseToggle={onSidebarCollapseToggle}
            />
        </CollapseToggleBtnContainer>

        {sections.length > 0 && (
            <ListGroup variant="flush">
                {sections.map((section, key) => (
                    <div key={section.slug + key}>
                        <StyledListGroupItem
                            className={
                                (collapsed ? " collapsed" : " asdasd") +
                                (key === 1 ? " current" : "")
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
    </Sidebar>
  );
};

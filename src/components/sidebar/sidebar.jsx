import React from "react";
import styled from "styled-components";
import CompanyBrand from "../company-brand/company-brand";
import CollapseToggleBtn from "./collapse-toggle-btn";

import Icon from "../icon/icon";

const sidebarCollapsedWidth = 66;
const sidebarExpandedWidth = 243;

const sidebarWidth = props =>
    props.collapsed ? sidebarCollapsedWidth : sidebarExpandedWidth;

// SideNav
const Sidebar = styled.div`
  background-color: #fff;
  border-right: 1px solid #ddd;
  width: ${sidebarWidth}px;
  min-width: ${sidebarWidth}px;
  max-width: ${sidebarWidth}px;
  height: 100vh;
  transition: all 0.3s;
`;

const CollapseToggleBtnContainer = styled.div`
  position: absolute;
  bottom: 250px;
  left: calc(${sidebarWidth}px - 13px);
  transition: all 0.3s;
`;

export default ({sidebarStatus, onSidebarCollapseToggle}) => {
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
            <ul>
                {sections.map((section, key) => (
                    <div>
                        <li key={key}>
                            <Icon icon={section.iconName}/> {section.name}
                        </li>
                        <ul>
                            {section.links.map((link, key2) => (
                                <li key={key2}>
                                    <Icon icon={link.iconName}/>
                                    <a href={link.href}>{link.value}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </ul>
        )}
    </Sidebar>
  );
};

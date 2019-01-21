import React from "react";
import Icon from "../icon/icon";
import IconText from "../icon/icon-text";
import styled from "styled-components";
import { ListGroup } from "react-bootstrap";
import { Collapse, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SectionContainer = styled.div`
  ${ListGroup.Item}.current.collapsed & {
    color: #056cc2;
  }
`;

const SectionTitle = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

const SectionOpenToggle = styled.div`
  vertical-align: middle;
`;

const StyledCollapse = styled(Collapse)`
  border-top: 1px solid #d1d1d1;
`;

export default ({ section, onSectionCollapseToggle, sidebarCollapsed }) => {
  const { open, slug } = section;

  return (
    <SectionContainer>
      <SectionTitle>
        {sidebarCollapsed ? (
          <Icon icon={section.iconName} />
        ) : (
          <>
            <IconText iconName={section.iconName} text={section.name} />
            <SectionOpenToggle
              onClick={() => onSectionCollapseToggle(section)}
              aria-controls={slug}
              aria-expanded={open}
            >
                <Icon icon={"MoreHoriz"} />
            </SectionOpenToggle>
          </>
        )}
      </SectionTitle>

      {!sidebarCollapsed && (
        <StyledCollapse in={open}>
          <div id={slug}>
            <Nav className="flex-column">
              {section.links.map((link, key) => (
                <NavLink key={key} to={link.href} activeClassName="current">
                  <IconText iconName={link.iconName} text={link.value} />
                </NavLink>
              ))}
            </Nav>
          </div>
        </StyledCollapse>
      )}
    </SectionContainer>
  );
};

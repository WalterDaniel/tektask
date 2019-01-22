import React from "react";
import Icon from "../icon/icon";
import IconText from "../icon/icon-text";
import styled from "styled-components";
import { ListGroup, Collapse, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SectionContainer = styled.div`
border-bottom: 1px solid #d1d1d1;
  ${ListGroup.Item}.current.collapsed & {
    color: #056cc2;
  }
`;

const ColoredSpan = styled.span`
  color: ${({ color }) => color};
`;

const SectionTitle = styled.div`
  position: relative;

  & > div {
    font-weight: bold;
    font-size: 0.9em;
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
    align-items: center;
  }

  &:hover {
    cursor: pointer;
  }

  ${ListGroup.Item}.collapsed & {
    border-bottom: 0;
  }

  & ${ColoredSpan} {
    color: #a2a3a4;
  }
`;

const StyledCollapse = styled(Collapse)`
  ${Nav} {
    padding: 8px 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1em;
  color: #2f3436;
  padding: 5px 15px;

  &:hover {
    text-decoration: none;
    background-color: red;
  }

  & svg {
    font-size: 1em;
  }
`;

const Bar = styled.span`
  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }

  &:before,
  &:after {
    content: "";
    height: 1px;
    width: 44%;
    bottom: 0px;
    position: absolute;
    background: #d1d1d1;
  }
`;

export default ({ section, onSectionCollapseToggle, sidebarCollapsed }) => {
  const { open, slug } = section;

  return (
    <SectionContainer>
      <SectionTitle
        onClick={() => onSectionCollapseToggle(section)}
        aria-controls={slug}
        aria-expanded={open}
      >
        {sidebarCollapsed ? (
          <div>
            <Icon icon={section.iconName} />
          </div>
        ) : (
          <div>
            <IconText iconName={section.iconName} text={section.name} />
            <ColoredSpan color={"#A2A3A4"}>
              <Icon icon={"MoreHoriz"} />
            </ColoredSpan>
          </div>
        )}
        {!sidebarCollapsed && <Bar />}
      </SectionTitle>

      {!sidebarCollapsed && (
        <StyledCollapse in={open}>
          <div id={slug}>
            <Nav className="flex-column">
              {section.links.map((link, key) => (
                <StyledNavLink
                  key={key}
                  to={link.href}
                  activeClassName="current"
                >
                  <IconText iconName={link.iconName} text={link.value} />
                </StyledNavLink>
              ))}
            </Nav>
          </div>
        </StyledCollapse>
      )}
    </SectionContainer>
  );
};

import React from "react";
import Icon from "../icon/icon";
import IconText from "../icon/icon-text";
import styled from "styled-components";
import {ListGroup} from "react-bootstrap";

import {Collapse, Nav} from "react-bootstrap";

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

export default ({section, onSectionCollapseToggle, sidebarCollapsed}) => {
    const {open, slug} = section;

    return (
        <SectionContainer>
            <SectionTitle>
                {sidebarCollapsed ? (
                    <Icon icon={section.iconName}/>
                ) : (
                    <>
                        <IconText iconName={section.iconName} text={section.name}/>
                        <SectionOpenToggle
                            onClick={() => onSectionCollapseToggle(section)}
                            aria-controls={slug}
                            aria-expanded={open}
                        >
                            ...
                        </SectionOpenToggle>
                    </>
                )}
            </SectionTitle>

            {!sidebarCollapsed && (
                <StyledCollapse in={open}>
                    <div id={slug}>
                        <Nav className="flex-column">
                            {section.links.map((link, key) => (
                                <Nav.Link key={link.slug + key} eventKey={link.slug}>
                                    <IconText iconName={link.iconName} text={link.value}/>
                                </Nav.Link>
                            ))}
                        </Nav>
                    </div>
                </StyledCollapse>
            )}
        </SectionContainer>
    );
};

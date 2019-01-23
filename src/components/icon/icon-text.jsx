import React from "react";
import styled from "styled-components";
import Icon from "./icon";

const IconText = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;

  & > svg {
    margin: 2px 5px 2px 0;
    font-size: 0.9em;
  }
`;

export default ({ iconName, text, className }) => (
  <IconText className={className}>
    <Icon icon={iconName} /> {text}
  </IconText>
);

import React from "react";
import Icon from "./icon";
import styled from "styled-components";

const ColoredIcon = styled.span`
  color: ${({ colorName }) => colorName};
`;

export default ({ colorName, iconName, className }) => (
  <ColoredIcon className={className} colorName={colorName}>
    <Icon icon={iconName} />
  </ColoredIcon>
);

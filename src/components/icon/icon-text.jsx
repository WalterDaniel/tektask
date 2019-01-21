import React from "react";
import styled from "styled-components";
import Icon from "./icon";

const IconText = styled.div``;

export default ({iconName, text}) => (
    <IconText>
        <Icon icon={iconName}/> {text}
    </IconText>
);

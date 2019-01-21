import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  background-color: ${({ colorValue }) => colorValue};
  height: 30px;
  width: 30px;
  border-radius: 50%;

  margin-right: ${({ joined }) => (joined ? "-10" : "0")}px;
`;

export default ({ colorValue, quantity, joined }) => {
  return (
    <Circle colorValue={colorValue} joined={joined}>
      {quantity > 0 && <span> {quantity} </span>}
    </Circle>
  );
};

import React from "react";
import styled from "styled-components";
import MemberCircle from "./member-circle";

const SingleCircle = styled(MemberCircle)`
  background-color: ${({ colorValue }) => colorValue};
  height: 30px;
  width: 30px;

  margin-right: 0;
`;

export default ({ colorValue }) => {
  return <SingleCircle colorValue={colorValue} />;
};

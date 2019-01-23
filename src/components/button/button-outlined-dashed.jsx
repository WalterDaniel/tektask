import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const OutlinedDashedBtn = styled(Button)`
  && {
    border-color: #a2a3a4;
    border-radius: 0;
    border-style: dashed;
    color: #a2a3a4;
    font-size: 0.9em;
    margin: 10px 23px 10px;
    padding: 0 10px;
    width: max-content;

    &:hover {
      background-color: #a2a3a4;
      border-color: #a2a3a4;
    }
  }
`;

export default props => (
  <OutlinedDashedBtn className={props.className} {...props}>
    {" "}
    {props.children}{" "}
  </OutlinedDashedBtn>
);

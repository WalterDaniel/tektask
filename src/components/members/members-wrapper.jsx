import React from "react";
import MemberCircle from "./member-circle";
import { MemberCirclesColor } from "../../__mock__/data/mock-data";
import styled from "styled-components";

const MemberCirclesWrapper = styled.div`
  display: flex;
  flex-flow: row-reverse;
  margin-right: 10px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: black;
      font-size: smaller;
      margin-inline-start: 5px;
    }
  }
`;

export default ({ joined }) => {
  const memberCirclesColor = [...MemberCirclesColor(10)];

  return (
    <MemberCirclesWrapper>
      {memberCirclesColor.reverse().map((c, key) => (
        <MemberCircle
          key={key}
          colorValue={c.color}
          quantity={c.quantity}
          joined={joined}
        />
      ))}
    </MemberCirclesWrapper>
  );
};

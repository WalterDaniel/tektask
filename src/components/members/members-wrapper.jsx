import React from "react";
import MemberCircle from "./member-circle";
import { MemberCirclesColor } from "../../__mock__/data/mock-data";
import styled from "styled-components";

const MemberCirclesWrapper = styled.div`
  display: flex;
`;

export default ({ joined }) => {
  const memberCirclesColor = [...MemberCirclesColor(6)];

  return (
    <MemberCirclesWrapper>
      {memberCirclesColor.map((c, key) => (
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

import React from "react";
import { Alert } from "react-bootstrap";
import styled from "styled-components";

const Content = styled.div`
  padding: 2em;
`;

export default ({ extra }) => {
  const link = extra;
  return (
    <Content>
      <Alert variant={"primary"}>
        Este es el contenido "{link.slug}" y "{link.value}"
      </Alert>
    </Content>
  );
};

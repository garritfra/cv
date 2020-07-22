import React from "react";
import styled from "styled-components";

export default function Event({ title, description, year }) {
  return (
    <Container>
      <YearContainer>
        <Title>{year}</Title>
      </YearContainer>
      <Divider />
      <ContentContainer>
        <Title>{title}</Title>
        <p>{description}</p>
      </ContentContainer>
    </Container>
  );
}

const YearContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 1em;
`;

const ContentContainer = styled.div`
  margin-left: 2em;
`;

const Container = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin: 0;
`;

const Divider = styled.div`
  width: 0.5em;
  background: blue;
`;

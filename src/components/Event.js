import React from "react";
import styled from "styled-components";

export default function Event({ title, description, year }) {
  return (
    <Container>
      <YearContainer>
        <Title>{year}</Title>
      </YearContainer>
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

const ContentContainer = styled.div``;

const Container = styled.div`
  display: flex;
  margin: 1em;
`;

const Title = styled.h2`
  margin: 0;
`;

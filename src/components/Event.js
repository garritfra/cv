import React from "react";
import styled from "styled-components";

export default function Event({ title, description, year }) {
  return (
    <Container>
      <YearContainer>
        <Year>{year}</Year>
      </YearContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentContainer>
    </Container>
  );
}

const YearContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 1em;
  display: flex;
  justify-content: right;
  width: 10em;
`;

const ContentContainer = styled.div`
  margin-left: 2em;
  max-width: 30em;
`;

const Container = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin: 0;
`;

const Description = styled.p`
  text-align: justify;
  white-space: pre-line;
  line-height: 1.5;
`;

const Year = styled.h3`
  margin: 0;
`;

const Divider = styled.div`
  width: 0.5em;
  background: blue;
`;

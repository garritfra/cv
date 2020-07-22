import React, { useState } from "react";
import styled from "styled-components";
import Event from "./Event";

const Container = styled.div`
  align-items: center;
`;

export default function App() {
  const events = [
    { year: 2020, title: "foo", description: "Lorem Ipsum" },
    { year: 2019, title: "bar", description: "Lorem Ipsum" },
  ];

  const eventsComponents = events.map((event) => (
    <SpacedEvent
      title={event.title}
      description={event.description}
      year={event.year}
    />
  ));

  return <Container>{eventsComponents}</Container>;
}

const SpacedEvent = styled(Event)`
  margin: 2em;
`;

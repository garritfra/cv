import React, { useState } from "react";
import styled from "styled-components";
import Event from "./Event";

const Container = styled.div`
  align-items: center;
  margin-left: 30vw;
  margin-right: 10vw;
  margin-top: 5em;
  font-family: Montserrat, sans-serif;

  @media screen and (max-width: 1200px) {
    margin-left: 20vw;
  }
  @media screen and (max-width: 800px) {
    margin-left: 10vw;
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 450px) {
  }
`;

export default function App() {
  const events = [
    {
      year: 2020,
      title: "foo",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      year: 2019,
      title: "bar",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
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

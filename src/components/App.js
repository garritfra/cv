import React, { Component } from "react";
import styled from "styled-components";
import Event from "./Event";

const Container = styled.div`
  text-align: center;
`;

export default function App() {
  return (
    <Container>
      <Event title={"foo"} description="Lorem Ipsum" />
      <Event title={"bar"} description="Lorem Ipsum" />
      <Event title={"baz"} description="Lorem Ipsum" />
    </Container>
  );
}

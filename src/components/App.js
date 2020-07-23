import React, { useState } from "react";
import styled from "styled-components";
import Event from "./Event";

const Container = styled.div`
  align-items: center;
  margin-left: 20vw;
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
    margin-left: 5vw;
  }
  @media screen and (max-width: 450px) {
  }
`;

export default function App() {
  const events = [
    {
      year: "2020 - now",
      title: "Mobile Application Developer",
      description:
        "CGI Germany\nProjects related to mobile app development in various fields, including smart home and vehicle connectivity",
    },
    {
      year: "2019",
      title:
        "Cisco Certified Network Associate (CCNA) Routing and Switching (Certification)",
    },
    {
      year: "2018",
      title: "Programming Workshop Director",
      description:
        "Oskar-Kämmer-Realschule - Braunschweig, Germany\nDuration: two terms\nDesigning and directing a programming workshop for students of grade 6-8\nScratch and Python were lectured",
    },
    {
      year: "2017 - 2020",
      title: "Mobile Application Developer (Traineeship)",
      description:
        "CGI Germany\nVarious Projects related to mobile app development in various fields, including fleet management and game development",
    },
    {
      year: "2015 - 2017",
      title: "Advanced technical certificate (Degree)",
      description: "Otto-Bennemann-Schule - Braunschweig, Germany",
    },
    {
      year: "2015 - 2016",
      title: "SAP Developer (Internship)",
      description: "Volkswagen Financial Services",
    },
    {
      year: "2014 - 2015",
      title: "High School (Student Exchange)",
      description:
        "Rutland Senior Secondary School - Kelowna, British Columbia, Canada",
    },
    {
      year: "2014",
      title: "Advanced high school diploma",
      description: "Oskar-Kämmer Schule - Braunschweig, Germany",
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

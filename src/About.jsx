import React from "react";
import styled from "styled-components";
import FlexBox from "./common/ui/FlexBox";
import { H6, Display, H3 } from "./common/ui/Headings";

const Wrapper = styled(FlexBox)`
  width: 100%;
  height: 54.925rem;
  background-color: blue;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  justify-content: center;
`;
const AboutContent = styled(FlexBox)`
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
  row-gap: 16px;
  div {
    width: 4rem;
    height: 5px;
    background-color: black;
    border-radius: 10px;
  }
`;
const About = () => {
  return (
    <Wrapper>
      <AboutContent>
        <H3 color="white">About Me</H3>
        <div />
        <H6 color="white" textAlign="center">
          I am Sujit Rungta and I am a Final year B.tech Student Major in
          Computer Science and Business System. I am Skilled with different
          programming Languages like C/C++/JavaScript.I am skilled in React js
          for building dynamic, responsive and user-friendly website.I love to
          explore new technologies related in the development field.
        </H6>

        <H6 color="white" textAling="center">
          Age......27
        </H6>
        <H6 color="white" textAling="center">
          Freelance....Available
        </H6>
        <H6 color="white" textAling="center">
          Residence....Kolkata,India
        </H6>
        <H6 color="white" textAling="center">
          Hobbies....Playing Sports,Singing,Developing Websites.
        </H6>
      </AboutContent>
    </Wrapper>
  );
};
export default About;

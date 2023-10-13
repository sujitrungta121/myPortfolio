import React, { useEffect } from "react";
import styled from "styled-components";
import Typed from "typed.js";
import FlexBox from "./common/ui/FlexBox";
import { Body2, Display, H2 } from "./common/ui/Headings";
// import Navbar from "./common/ui/Navbar";
import myimg from "../src/assets/image-sujit.jfif";
// import { device } from "./common/ui/Resposive";
import Footer from "./Components/Footer";

const Container = styled(FlexBox)`
  width: 100%;
  /* height: 100%; */
  padding-bottom: 0px;
  height: 54.925rem;
  overflow: hidden;
  background-color: blue;
  flex-direction: column;
`;

const Img = styled.img`
  border-radius: 18.75rem;
  width: 31.25rem;
  height: 31.25rem;

  @media (max-width: 768px) {
    border-radius: 18.75rem;
    width: 20rem;
    height: 20rem;
  }
`;

const HomeContent = styled(FlexBox)`
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    height: 100%;
    align-items: center;
    flex-direction: column;
  }
`;

const HomeParagraph = styled(FlexBox)`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;
const TypeText = styled.span`
  font-size: 50px;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${({ color }) => (color ? color : "white")};
  color: "white";
`;

const Home = () => {
  useEffect(() => {
    const options = {
      strings: [
        "I am a passionate Frontend Web Developer.",
        "I am also an App Developer, and I am also a Freelancer",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    const typed = new Typed(".typed-text", options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container column>
      <HomeContent>
        <FlexBox align="center" justify="space-between">
          <Img src={myimg} alt="image can't be displayed" />
          <HomeParagraph width="100%" padding="0rem 1rem 0rem 0rem">
            <Display>
              Hi! I am Sujit Rungta. I am a Final Year Student.
              <TypeText className="typed-text"></TypeText>
            </Display>
          </HomeParagraph>
        </FlexBox>
        <FlexBox columnGap="10px">
          <Button color="black">
            <Body2 color="white"> Learn More</Body2>
          </Button>
          <Button color="black">
            <Body2 color="white"> Download my CV</Body2>
          </Button>
        </FlexBox>
      </HomeContent>
    </Container>
  );
};

export default Home;

import React from "react";
import FlexBox from "../common/ui/FlexBox";
import styled from "styled-components";
import {
  FaCopyright,
  FaFacebook,
  FaGit,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {  H6 } from "../common/ui/Headings";

const Wrapper = styled(FlexBox)`
  width: 100%;
  background-color: black;
  height: 12rem;
`;

const Footer = () => {
  return (
    <Wrapper justify="center" align="center" column rowGap="10px">
      <FlexBox columnGap="20px">
        <a href="https://www.facebook.com/sujit.rungta1">
          <FaFacebook color="white" size="20px" />
        </a>
        <a href="https://www.instagram.com/sujitrungta/?hl=en">
          <FaInstagram color="white" size="20px" />
        </a>
        <a href="https://www.linkedin.com/in/rungta-sujit/">
          <FaLinkedin color="white" size="20px" />
        </a>
        <a href="https://github.com/sujitrungta121">
          <FaGithub color="white" size="20px" />
        </a>
      </FlexBox>
      <FlexBox row align="center" columnGap="5px">
        <FaCopyright color="white" />

        <H6 color="white">2023 | CopyRight disclamer</H6>
      </FlexBox>
    </Wrapper>
  );
};
export default Footer;

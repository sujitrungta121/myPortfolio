import React from "react";
import styled from "styled-components";
import FlexBox from "./FlexBox";
import { H2 } from "./Headings";
import Burger from "../../Components/Burger";

const Nav = styled(FlexBox)`
  width: 100%;
  height: 5rem;
  position: sticky;
  top: 0px;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <H2 color="white">Sujit's Portfolio</H2>
      <Burger />
    </Nav>
  );
};
export default Navbar;

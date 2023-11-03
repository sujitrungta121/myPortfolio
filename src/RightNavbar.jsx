import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  column-gap: 30px;

  list-style: none;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: pink;
    width: 300px;
    height: 100vh;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    padding: 5rem 0rem 0rem 2rem;
    row-gap: 3rem;
    position: fixed;
    top: 0;
    right: 0;
  }
`;
const Anchor = styled(Link)`
  text-decoration: none;
  list-style-type: none;
  font-size: 1.25rem;
  color: white;
`;

const RightNavbar = ({ open }) => {
  return (
    <div>
      <Ul open={open}>
        <li>
          <Anchor to="/">Home</Anchor>
        </li>
        <li>
          <Anchor to="/about">About</Anchor>
        </li>
        <li>
          <Anchor to="/Projects">Projects</Anchor>
        </li>
        <li>
          <Anchor to="/contact">Contact us</Anchor>
        </li>
        <li>
          <Anchor to="/experience">Experience</Anchor>
        </li>
      </Ul>
    </div>
  );
};
export default RightNavbar;

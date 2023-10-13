import React, { useState } from "react";
import styled from "styled-components";
import RightNavbar from "../RightNavbar";

const StyledBurger = styled.div`
  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
    display: flex;
    position: fixed;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;
    div {
      width: 2rem;
      height: 0.25rem;
      border-radius: 10px;
      background-color: ${({ open }) => (open ? "blue" : "red")};
      transform-origin: 1px;
      transition: all 0.3s linear;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>

      <RightNavbar open={open} />
    </>
  );
};
export default Burger;

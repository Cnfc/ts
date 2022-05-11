import React from "react";
import { FC } from "react";
import styled, { keyframes } from "styled-components";

const animate1 = keyframes`
  0%{
transform:translateX(-100%);
  }

  100%{
    transform:translateX(100%);
  }
`;

const animate2 = keyframes`
  0%{
transform:translateY(-100%);
  }

  100%{
    transform:translateY(100%);
  }
`;

const animate3 = keyframes`
  0%{
transform:translateX(100%);
  }

  100%{
    transform:translateX(-100%);
  }
`;

const animate4 = keyframes`
  0%{
transform:translateY(100%);
  }

  100%{
    transform:translateY(-100%);
  }
`;

const Main = styled.div`
  height: 70vh;
  background: #0c002b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const A = styled.a`
  color: #1670f0;
  font-size: 30px;
  padding: 30px 60px;
  letter-spacing: 4px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 2%;
    left: 2%;
    bottom: 2%;
    width: 50%;
    background: rgba(255, 255, 255, 0.05);
  }
`;

const Span = styled.span`
  &:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #0c002b, #1779ff);
    animation: ${animate1} 2s linear infinite;
  }

  &:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #0c002b, #1779ff);
    animation: ${animate2} 2s linear infinite;
  }

  &:nth-child(3) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to left, #0c002b, #1779ff);
    animation: ${animate3} 2s linear infinite;
  }

  &:nth-child(4) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to top, #0c002b, #1779ff);
    animation: ${animate4} 2s linear infinite;
  }
`;

interface ButtonText {
  text: string;
}

const RevealAnimate: FC<ButtonText> = ({ text }) => {
  return (
    <Main>
      <A>
        <Span></Span>
        <Span></Span>
        <Span></Span>
        <Span></Span>
        {text}
      </A>
    </Main>
  );
};

export default RevealAnimate;

import React from "react";
import styled, { keyframes } from "styled-components";

const BOD = styled.div`
  background-color: #133654;
  height: 70vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const fadeIn = keyframes`
  0% {
      background-position: -500%;
    }

    100% {
      background-position: 500%;
    }
`;

const ShiningTextAnimation = styled.p`
  color: linear-gradient(to left, #000, #fff, #000);

  text-transform: uppercase;
  letter-spacing: 2px;
  overflow: hidden;
  background: linear-gradient(to right, #000, #fff, #000);
  animation: ${fadeIn} 1s linear infinite;
`;

const TextAnimation = () => {
  return (
    <BOD>
      <ShiningTextAnimation>
        The body element represents the content of the document.
      </ShiningTextAnimation>
    </BOD>
  );
};

export default TextAnimation;

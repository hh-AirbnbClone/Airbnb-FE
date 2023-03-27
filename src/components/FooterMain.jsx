import React from "react";
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border: 1px solid black;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: white;
`;

function FooterMain() {
  return (
    <StContainer>
      Copyright {new Date().getFullYear()}. HangHae Airbnb Clone Coding
    </StContainer>
  );
}
export default FooterMain;

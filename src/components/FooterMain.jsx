import React from "react";
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border: 1px solid black;
  position: absolute;
  bottom: 0;
`;

function FooterMain() {
  return (
    <StContainer>
      Copyright {new Date().getFullYear()}. HangHae Airbnb Clone Coding
    </StContainer>
  );
}
export default FooterMain;

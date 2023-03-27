import React, { useState } from "react";
import styled from "styled-components";
import { cookies } from "../shared/cookies";
import LoginModal from "./LoginModal";
import { Logo } from "./Logo";

function Header() {
  return (
    <StHeaderWrapper>
      <StHeader>
        <Logo></Logo>
        <h2>여기에 페이지 제목이 들어갑니다.</h2>
        <div>
          <LoginModal />
        </div>
      </StHeader>
    </StHeaderWrapper>
  );
}

const StHeaderWrapper = styled.div`
  width: 100%;
  padding: 2% 0;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: center;
`;

const StHeader = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
`;

const StLogoHeader = styled.div``;
export default Header;

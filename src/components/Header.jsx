import React, { useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import { Logo } from "./Logo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const onClickModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StHeaderWrapper>
      <StHeader>
        <Logo></Logo>
        <h2>여기에 페이지 제목이 들어갑니다.</h2>
      </StHeader>
      <div>
        <button onClick={onClickModal}>로그인</button>
        {isOpen && <Login open={isOpen} />}
      </div>
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
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
const StLogoHeader = styled.div``;
export default Header;

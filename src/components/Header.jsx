import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StHeaderWrapper>
      <StHeader>
        <h2>여기에 페이지 제목이 들어갑니다.</h2>
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
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
const StLogoHeader = styled.div``;
export default Header;

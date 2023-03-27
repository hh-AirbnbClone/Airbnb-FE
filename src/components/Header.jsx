import React, { useState } from "react";
import styled from "styled-components";
import { cookies } from "../shared/cookies";
import LoginModal from "./LoginModal";
import { Logo } from "./Logo";
import {SearchBox} from "./SearchBox";
import {LanguageIcon} from "./LanguageIcon";

function Header() {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const token = cookies.get('token')
  console.log(token);
  return (
    <StHeaderWrapper>
      <StHeader>
        <Logo/>
        <SearchBox/>
        <LanguageIcon/>
        <div>
          <LoginModal/>
        </div>

      </StHeader>
    </StHeaderWrapper>
  );
}
export default Header;

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
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const StLogoHeader = styled.div``;

import React from "react";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "../shared/kakoLogin";

function LoginModal({ setIsOpen, isOpen }) {
  return (
    <>
      <KaKaoBtn href={KAKAO_AUTH_URL}>
        <img src="https://developers.kakao.com/tool/resource/static/img/button/login/simple/ko/kakao_login_small.png" />
      </KaKaoBtn>
    </>
  );
}

export default LoginModal;

const KaKaoBtn = styled.a`
  display: block;
  
  img {
    display: block;
    width: 60px;
    height: auto;
  }
`;

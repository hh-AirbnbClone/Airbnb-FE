import React from "react";
import styled from "styled-components";

import Home from "../pages/Home";
import { cookies } from "../shared/cookies";
import { KAKAO_AUTH_URL } from "../shared/kakoLogin";
let kakaoPopUp = null;

function KakaoLoginModal() {
  const width = 350;
  const height = 600;
  const left = window.innerWidth / 2 - width / 2;
  const top = window.innerHeight / 2 - height / 2;
  kakaoPopUp = window.open(KAKAO_AUTH_URL, "_blank", `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`);
}
const token = cookies.get("token")


function LoginModal({ setIsOpen, isOpen }) {

  if (token) return alert("이미 로그인을 하셨습니다.")
  return <div>
  <KaKaoBtn  rel="noopener noreferrer" onClick={KakaoLoginModal}>
  카카오 로그인하기
</KaKaoBtn>
  </div>
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

import React from "react";
import styled from "styled-components";
import Home from "../pages/Home";
import { KAKAO_AUTH_URL } from "../shared/kakoLogin";

function LoginModal({ setIsOpen, isOpen }) {
  return <KaKaoBtn href={KAKAO_AUTH_URL}>카카오 로그인하기</KaKaoBtn>;
}

export default LoginModal;

const StModalWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
`;

const KaKaoBtn = styled.a``;

const StModalOpen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalBox = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 30px;
`;

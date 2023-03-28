import React from "react";
import styled from "styled-components";
import { cookies } from "../shared/cookies";
import { KAKAO_AUTH_URL } from "../shared/kakoLogin";

function LoginModal({ setIsOpen, isOpen }) {
  const handleKakaoLogin = () => {
    const width = 350;
    const height = 600;
    const left = window.innerWidth / 2 - (width + width / 2) / 2;
    const top = window.innerHeight / 2 - height / 2;
    window.open(
      KAKAO_AUTH_URL,
      "_blank",
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`
    );
  };

  const token = cookies.get("token");
  if (token) return alert("이미 로그인을 하셨습니다.");
  return (
    <div>
      <div onClick={handleKakaoLogin}>카카오톡으로 시작하기</div>
    </div>
  );
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

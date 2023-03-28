import React, { useEffect } from "react";
import styled from "styled-components";
import { cookies } from "../shared/cookies";
import { KAKAO_AUTH_URL } from "../shared/kakoLogin";

function LoginModal({ setIsOpen, isOpen }) {
  const token = cookies.get("token");
  useEffect(() => {
    if (token) return alert("이미 로그인을 하셨습니다.");
  }, []);
  return (
    <div>
      {token ? (
        <div>로그인완료</div>
      ) : (
        <a href={KAKAO_AUTH_URL}>카카오톡으로 시작하기</a>
      )}
    </div>
  );
}

export default LoginModal;

import React from "react";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "../shared/kakoLogin";

function Login() {
  return <KaKaoBtn href={KAKAO_AUTH_URL}>카카오 로그인하기</KaKaoBtn>;
}

export default Login;

const KaKaoBtn = styled.a``;
 
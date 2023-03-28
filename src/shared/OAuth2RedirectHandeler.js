/*global Kakao*/ 
//리다이렉트될 화면
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { cookies } from "./cookies";

function OAuth2RedirectHandeler() {
  const nav = useNavigate();
  const code = new URL( window.Kakao.Auth.login).searchParams.get("code");
  const KakaoInit = () => {
    Kakao.init('159de280691fa197a58e88677018194b');
  }; 
  const kakaoLogin = async () => {
    try {
      const res = await axios.get(`http://54.180.98.74/auth/login?code=${code}`);
      cookies.set("token", res.headers.authorization.substr(7), {
        path: "/",
      });
      nav("/");
    } catch (e) {
      alert(e);
    }
  };
  useEffect(() => {  //componentDidMount 역할을 해주는 형태의 useEffect (두번째 인자로 빈 배열)
    KakaoInit();
  }, []);
}

export default OAuth2RedirectHandeler
/*global Kakao*/
//리다이렉트될 화면
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { cookies } from "./cookies";

function OAuth2RedirectHandeler() {
  const nav = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  const kakaoLogin = async () => {
    try {
      const res = await axios.get(
        `http://54.180.98.74/auth/login?code=${code}`
      );
      cookies.set("token", res.headers.authorization.substr(7), {
        path: "/",
      });
      alert('로그인성공')
      nav("/");
    } catch (e) {
      alert(e);
    }
  };
  kakaoLogin();
}

export default OAuth2RedirectHandeler;
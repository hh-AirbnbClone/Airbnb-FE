//리다이렉트될 화면

import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { cookies } from "./cookies";

function OAuth2RedirectHandeler() {
  const nav = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const kakaoLogin = async () => {
    try {
      const res = await axios.get(`http://54.180.98.74/auth/login?code=${code}`);
      cookies.set("token", res.headers.authorization.substr(7), {
        path: "/",
      });
      nav("/#");
    } catch (e) {
      alert(e);
    }
  };
  kakaoLogin();

  return <div>OAuth2RedirectHandeler</div>;
}

export default OAuth2RedirectHandeler;



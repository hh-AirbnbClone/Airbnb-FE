//리다이렉트될 화면

import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../axios/api";
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

// function kakaoLogin() {
//   window.Kakao.Auth.login({
//     scope: 'profile_nickname, profile_image, account_email, gender, birthday',
//     success: function (receiveAuthObjData) {
//       window.Kakao.API.request({
//         url: '/v2/user/me',
//         success: res => {
//           const kakao_account = res.kakao_account;
//         },
//       });
//       fetch('https://a937-211-106-114-186.ngrok.io/users/login/kakao ', {
//         method: 'GET',
//         headers: {
//           Authorization: receiveAuthObjData.access_token,
//         },
//       });
//     },
//   });
// }

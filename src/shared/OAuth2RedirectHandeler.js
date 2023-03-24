//리다이렉트될 화면

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import instance from "../axios/api";
import { __getUsers } from "../redux/modules/userSlice";
import { cookies } from "./cookies";

function OAuth2RedirectHandeler() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const kakao = async () => {
    try {
      const code = new URL(window.location.href).searchParams.get("code");
      const res = await instance.post(`/api/auth/login?code=${code}`);
      cookies.set("token", res.headers.Authorization.substr(7), {});
    } catch (e) {
      alert(e);
    }
  };
  useEffect(() => {
    kakao();
    navigate("/");
  });

  return <div>OAuth2RedirectHandeler</div>;
}

export default OAuth2RedirectHandeler;

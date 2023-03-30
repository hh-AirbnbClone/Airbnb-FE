/*global Kakao*/

import React, { useState } from "react";
import { cookies } from "../shared/cookies";
import { KAKAO_AUTH_URL } from "../shared/kakoLogin";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// admin key bfbfd55394a6470099ad73f1da95486d
function LoginModal({ setIsOpen, isOpen }) {
  const token = cookies.get("token");
  const profile = cookies.get("profile");
  const userid = cookies.get("userid");
  
  const [isLogout, setIsLogout] = useState(false);
  const navigate = useNavigate();

  const formUrlEncoded = (x) =>
    Object.keys(x).reduce(
      (p, c) => p + `&${c}=${encodeURIComponent(x[c])}`,
      ""
    );
  const KAKAO_ADMIN = "bfbfd55394a6470099ad73f1da95486d";

  const kakaoLogout = async () => {
    try {
      await axios.post(
        "https://kapi.kakao.com/v1/user/logout",
        formUrlEncoded({
          target_id_type: "user_id",
          target_id: userid,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            authorization: `KakaoAK ${KAKAO_ADMIN}`,
          },
        }
      );
      cookies.remove("token");
      cookies.remove("profile");
      cookies.remove("userid");
      setIsLogout(true)
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div>
      {token ? (
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={profile}
            alt="profile이미지"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
          <button onClick={kakaoLogout}>로그아웃</button>
        </div>
      ) : (
        <a href={KAKAO_AUTH_URL}>카카오톡으로 시작하기</a>
      )}
    </div>
  );
}

export default LoginModal;

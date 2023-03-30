import React, { useState } from "react";
import { cookies } from "../shared/cookies";
import { KAKAO_AUTH_URL } from "../shared/kakoLogin";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function LoginModal({ setIsOpen, isOpen }) {
  const token = cookies.get("token");
  const profile = cookies.get("profile");
  const [isLogout, setIsLogout] = useState(false);
  const navigate = useNavigate();
  const onLogoutBtn = () => {
    Swal.fire({
      text: "정말로 로그아웃 하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        cookies.remove("token");
        cookies.remove("profile");
        setIsLogout(true);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        navigate("/");
      }
    });
  };

  return (
    <div>
      {token ? (
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            width : "140px",
            paddingLeft : "4px",
            paddingRight : "4px",
            justifyContent : "space-between"
          }}
        >
          <img
            src={profile}
            alt="profile이미지"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
          <button className="button"onClick={onLogoutBtn}
            style = {{width: "80px" }}
          >LOGOUT</button>
        </div>
      ) : (
        <button className="colorKakao"><a className="colorKakao" href={KAKAO_AUTH_URL}>LOGIN</a></button>
      )}
    </div>
  );
}

export default LoginModal;

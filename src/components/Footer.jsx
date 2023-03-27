import React from "react";
import styled from "styled-components";
import { BsDot, BsTwitter, BsCameraFill } from "react-icons/bs";
import { MdCopyright } from "react-icons/md";
import { ImEarth } from "react-icons/im";
import { BiWon } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <FooterContainer>
      <LeftFooterBox>
        <MdCopyright />
        2022 airdnd <BsDot /> 개인정보 처리방침 <BsDot /> 이용약관 <BsDot />{" "}
        사이트맵 <BsDot />
        한국의 변경된 환불 정책 <BsDot /> 회사 세부정보
      </LeftFooterBox>
      <RightFooterBox>
        <FaFacebookF />
        &nbsp;&nbsp;&nbsp; <BsTwitter />
        &nbsp;&nbsp;&nbsp; <BsCameraFill /> &nbsp;&nbsp;&nbsp;
      </RightFooterBox>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  width: 100vw;

  justify-content: space-between;

  border-top: 1px solid gray;
  overflow: hidden;
  box-sizing: border-box;
  color: gray;
  bottom: 0;
  left: 0;
  padding: 2% 2.5%;
  position: fixed;
`;

const LeftFooterBox = styled.div`
  font-family: "Noto Sans KR";
`;

const RightFooterBox = styled.div`
  width: 300px;
  text-align: right;
`;

export default Footer;

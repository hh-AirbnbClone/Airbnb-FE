import React from "react";
import FooterMain from "../components/footer/FooterMain";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Filter from "../components/Flter";
import Header from "../components/header/Header";
import MainRooms from "../components/MainRooms";
import { useState,useRef,useEffect } from "react";

function Home() {
  const [isOpenModal , setIsOpenModal] = useState(false);
  
  return (
    <>
      <Header setIsOpenModal={setIsOpenModal} />
      <StMainWrap>
        <MainRooms isOpenModal={isOpenModal}  setIsOpenModal={setIsOpenModal}/>
        <FooterMain/>
      </StMainWrap>
    </>
    );
}
export default Home;

export const StMainWrap = styled.div`
  position: relative;
`;

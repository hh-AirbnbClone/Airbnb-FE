import React from "react";
import FooterMain from "../components/footer/FooterMain";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Filter from "../components/Flter";
import Header from "../components/header/Header";
import MainRooms from "../components/MainRooms";


function Home() {
  return (
    <>
      <Header />
      <StMainWrap>
        <Filter/>
        <MainRooms/>
        <FooterMain/>
      </StMainWrap>
      </>
    );
}
export default Home;

export const StMainWrap = styled.div`
  position: relative;
`;

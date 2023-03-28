import React from "react";
import FooterMain from "../components/footer/FooterMain";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Filter from "../components/Flter";
// import SearchRooms from "../components/SearchRooms";
import Header from "../components/header/Header";
import MainRooms from "../components/MainRooms";


function Home() {
    return (
      <>
      <Header/>
      <StMainWrap>
        <Filter/>
        {/* <SearchRooms />  */}
        <MainRooms /> 
        <FooterMain/>
      </StMainWrap>
      </>
    );
}

export default Home;

export const Box = styled.div`
  width: 15%;
  height: 30%;
  flex: auto;
  gap: 1%;
`
export const StSpanGray = styled.span`
  color: gray;
  font-weight: 100;
`
export const StMainWrap = styled.div`
  position: relative;
`
export const StTextWrap = styled.div`
  padding: 1% 1% 8% 1%;
  overflow: hidden;
  box-sizing: border-box;

`


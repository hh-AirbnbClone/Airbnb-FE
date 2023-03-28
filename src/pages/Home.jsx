import React from "react";
import FooterMain from "../components/FooterMain";
import {FlexGap} from "../components/Flex"
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Filter from "../components/Flter";
import MainRooms from "../components/MainRooms";
import SearchRooms from "../components/MainRooms";
import Header from "../components/Header";
import { useState } from "react";

function Home() {
  const [showhRooms, setShowSearchRooms] = useState(false);
    return (
      <>
      <Header
        showSearchRooms={showhRooms}
        setShowSearchRooms={setShowSearchRooms}
      />
      <StMainWrap>
        <Filter/>
        <SearchRooms /> 
         {/* <MainRooms /> */}
        {/* {showhRooms ? <SearchRooms /> : <MainRooms />} */}
        <FooterMain/>
      </StMainWrap>
      </>
    );
  }


export default Home;

export const Box =styled.div`
  width: 15%;
  height: 30%;
  flex: auto;
  gap: 1%;
`
export const StPBold = styled.p`
  font-weight: 600;
  padding: 1% 0;
`
export const StPGray = styled.p`
  color: gray;
  padding: 2% 0;
`
export const StSpanGray = styled.span`
  color: gray;
  font-weight:100;
`
export const StMainWrap = styled.div`
  position: relative;
`
export const StTextWrap = styled.div`
  padding: 1% 1% 8% 1%;
  overflow: hidden;
  box-sizing: border-box;
`

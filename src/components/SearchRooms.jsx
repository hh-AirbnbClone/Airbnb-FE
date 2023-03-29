import queryFnSearch from '../components/header/Header'
import React from 'react'
import { StWrapperBig } from "../components/Wrapper";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import {FlexGap} from "../components/Flex"
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {IoIosArrowDropleft, IoIosArrowDropright} from "react-icons/io"
import { Link } from 'react-router-dom';
import {HeartIcon} from '../components/HeartIcon';
function SearchRooms({ address, checkInDate, checkOutDate, guestNum }) {
  const { data: roomData, isLoading, error } = useQuery(
    ['roomsSearch', address, checkInDate, checkOutDate, guestNum],
    queryFnSearch,{refetchOnWindowFocus: false}
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover : true,	
    dotsClass : "slick-dots", 
    nextArrow: (
        <IoIosArrowDropright  color="white"/>
    ),
    prevArrow: (
        <IoIosArrowDropleft color="white"/>
    ),
  };

  return (
    <StWrapperBig>
    <FlexGap>
      {roomData.map((data, index) => ( 
        <Box key={data.id} >
          <Link to={`/detail/${data.id}`}>
          <Slider className="mainBoxWrap" {...settings} style={{}}>
            {data.imageList.map((imageUrl, index) => (
              <div className="mainBox"  key={imageUrl.indexOf}>
                <IoIosArrowDropleft className="left arrow" color="white"/>
                <IoIosArrowDropright className="right arrow" color="white"/>
                <HeartIcon/>
                <div className="slick-dots"></div>
                <img src={imageUrl} alt="property" />
              </div >
            ))} 
          </Slider>
           </Link>
          <StTextWrap>
          <StPBold>{data.title}</StPBold>
          <StPBold>{data.address}</StPBold>
          <StPGray>{data.description}</StPGray>
          <StPGray>최대 인원 {data.maxGuest}</StPGray>
          <StPBold className="paddingBottom">₩ {data.price}<StSpanGray>/박</StSpanGray></StPBold>
          </StTextWrap>
        </Box>
      ))}
    </FlexGap>
    </StWrapperBig >
  );
}
export default SearchRooms

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

import React from 'react'
import { StWrapperBig } from "../components/Wrapper";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import {FlexGap} from "../components/Flex"
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";
import {IoIosArrowDropleft, IoIosArrowDropright} from "react-icons/io"
import {TiHeartOutline, TiHeart} from "react-icons/ti"
import { Link } from 'react-router-dom';
import {HeartIcon} from './HeartIcon';
const MainRooms = () => {
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
        const queryFn = async () => {
          const response = await axios.get("http://54.180.98.74/rooms");
          return response.data;
         
        }
        
        const { data, isLoading, error } = useQuery(['rooms'], queryFn, {refetchOnWindowFocus: false});
      
        if (isLoading) return <div>Loading...</div>;
      
        if (error) return <div>Error: {error.message}</div>;
  return (
    
     <StWrapperBig>
      <FlexGap>
        {data.map((data, index) => ( 
          <Box key={data.id} >
            {/* <Link to={`/detail/${data.id}`}> */}
            <Slider className="mainBoxWrap" {...settings} style={{}}>
              {data.imageList.map((imageUrl, index) => (
                <div className="mainBox"  key={imageUrl.indexOf}>
                  <IoIosArrowDropleft className="left arrow" color="white"/>
                  <IoIosArrowDropright className="right arrow" color="white"/>
                    <HeartIcon></HeartIcon>
                  <div className="slick-dots"></div>
                  <img src={imageUrl} alt="property" />
                </div >
              ))} 
            </Slider>
             {/* </Link> */}
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
    
  )
}

export default MainRooms

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

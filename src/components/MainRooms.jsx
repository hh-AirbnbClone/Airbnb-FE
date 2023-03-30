import React from 'react'
import { StWrapperBig } from "../components/Wrapper";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";
import {IoIosArrowDropleft, IoIosArrowDropright} from "react-icons/io"
import {TiHeartOutline, TiHeart} from "react-icons/ti"
import { Link } from 'react-router-dom';
import {HeartIcon} from './HeartIcon';
import {FlexGap} from "../components/Flex"
import SearchBarArear from "../components/searchBar/SearchBarArear"
import { useRef ,useEffect } from 'react';
const MainRooms = () => {
    const [isOpenModal , setIsOpenModal] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const ref = useRef();
    // prop
    const [address, setAddress] = useState('');
    const [guestNum, setGuestNum] = useState('');
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");

    function handleDateChange(inDate, outDate) {
        setCheckInDate(inDate);
        setCheckOutDate(outDate);
    }
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [ok, setOk]=useState(false);
    //캘린더모달
    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setShowSearch(false);
        }
      }
      useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    //slider
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

        const { data } = useQuery({
        // enabled:ok,
        queryKey:['searchrooms',{address, checkInDate, checkOutDate, guestNum,}],
        queryFn: async ()=>{
            
          const {data} = await axios.get("http://54.180.98.74/rooms", {
            params: {
              address, 
              checkInDate, 
              checkOutDate, 
              guestNum,
            },
          })
          console.log("payload==========>", data)
          return data
        },
        onSuccess: ()=>{
          setOk(false);
        }
      });
    
  return (
    
     <StWrapperBig>
          <SearchBarArear
            address={address}
            setAddress={setAddress}
            setGuestNum={setGuestNum}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            guestNum={guestNum}
            startDate={startDate}
            endDate={endDate}
            onChange={handleDateChange}
        />

      <GrideGap>
        {data?.data.map((data, index) => ( 
          <Box key={data.id} >
            <HeartIcon></HeartIcon>
            <Link to={`/detail/${data.id}`}>
            <Styled_Slide className="mainBoxWrap" {...settings} style={{}}>
              {data.imageList.map((imageUrl, index) => (
                <div className="mainBox"  key={imageUrl.indexOf}>
                  <IoIosArrowDropleft className="left arrow" color="white"/>
                  <IoIosArrowDropright className="right arrow" color="white"/>                   
                  <div className="slick-dots"></div>
                  <img src={imageUrl} alt="property" />
                </div >
              ))} 
            </Styled_Slide>
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
      </GrideGap>
      </StWrapperBig >
    
  )
}

export default MainRooms;

export const Styled_Slide = styled(Slider)`
	
    .slick-list{ //얘로 크기조정 했음
    	/* width: 240px; */
        margin: 0 auto;
        background-color: #f0f9ff;
    }
`

export const GrideGap = styled.div`
  width: 100% ;
  display: grid;
  grid-template-columns: 15.83% 15.83% 15.83% 15.83% 15.83% 15.83%;
  gap: 1%;
  margin-bottom: 22%;
`;

export const Box =styled.div`
    position: relative;
    width: 100%;
    height: 30%;
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


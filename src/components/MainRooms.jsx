import React from "react";
import { StWrapperBig } from "../components/Wrapper";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { TiHeartOutline, TiHeart } from "react-icons/ti";
import { Link } from "react-router-dom";


import {FlexGap} from "../components/Flex"
import { cookies } from "../shared/cookies";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const MainRooms = ({showSearch,isOpenModal,setIsOpenModal }) => {
    //const [isOpenModal , setIsOpenModal] = useState(false);
    //const modalRef = useRef();
    const [isOpen, setIsOpen] = useState(false);


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
    const [clicked, setClicked] = useState(false);
    const token = cookies.get("token");
    //캘린더모달

  const { data } = useQuery({
    queryKey: ["searchrooms", { address, checkInDate, checkOutDate, guestNum }],
    queryFn: async () => {
      // 토큰이있으면 header
      if (token) {
        const { data } = await axios.get("http://54.180.98.74/rooms", {
          params: { address, checkInDate, checkOutDate, guestNum },
          headers: { Authorization: `Bearer ${token}` },
        });
        
        return data;
        // 토큰이없으면 header없앰
      } else {
        const { data } = await axios.get("http://54.180.98.74/rooms", {
          params: { address, checkInDate, checkOutDate, guestNum },
          // headers: { Authorization: `Bearer ${token}` },
        });
        
        return data;
      }
    },

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
        queryKey:['searchrooms',{address, checkInDate, checkOutDate, guestNum,}],
        queryFn: async ()=>{
          const {data} = await axios.get("http://54.180.98.74/rooms", {

          })
          console.log(data?.data[2])
          console.log(data?.data[0])
          console.log(data?.data[1])
          return data
        },
        onSuccess: ()=>{
          // setOk(false);
        }
      });


  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: async (payload) => {
      
      const { mutate, isLoading, isSuccess, isError } = useMutation({
        mutationFn: async (payload) => {
          console.log(payload)
          const {data :responsData}= await axios.post(
            `http://54.180.98.74/rooms/bookmark/${payload}`,{},{headers: { Authorization: `Bearer ${token}` },}
          );
          return responsData;
        },
         onSuccess: (res) => {
          
          // setOk(false);
        alert(res.message);
        queryClient.invalidateQueries("bookmarks");
      },
      onError: (error) => {
        console.error(error);
        alert('로그인을 해주세요.');
      },
      retry: 0,
      }
      );   
  return (
     <StWrapperBig >
      
      {isOpenModal && (
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
            setIsOpenModal={setIsOpenModal}
        />
          )}
      <GrideGap>
        {data?.data.map((data, index) => (
          <Box key={data.id}>
            <HeartIcon
              className="heartWrap heart"
              onClick={() => {
                mutate(data.id);
              }}
            >
              {data.bookmark ? (
                <TiHeart className="MainColor heart" />
              ) : (
                <TiHeart className="tiheart heart" />
              )}
              {/* <TiHeartOutline className="heart" /> */}
            </HeartIcon>
            <Link to={`/detail/${data.id}`}>
              <Styled_Slide className="mainBoxWrap" {...settings} style={{}}>
                {data.imageList.map((imageUrl, index) => (
                  <div className="mainBox" key={imageUrl.indexOf}>
                    <IoIosArrowDropleft className="left arrow" color="white" />
                    <IoIosArrowDropright
                      className="right arrow"
                      color="white"
                    />
                    <div className="slick-dots"></div>
                    <img src={imageUrl} alt="property" />
                  </div>
                ))}
              </Styled_Slide>
            </Link>
            <StTextWrap>
              <StPBold>{data.title}</StPBold>
              <StPBold>{data.address}</StPBold>
              <StPGray>{data.description}</StPGray>
              <StPGray>최대 인원 {data.maxGuest}</StPGray>
              <StPBold className="paddingBottom">
                ₩ {data.price}
                <StSpanGray>/박</StSpanGray>
              </StPBold>
            </StTextWrap>
          </Box>
        ))}
      </GrideGap>
    </StWrapperBig>
  );
};

export default MainRooms;

export const Styled_Slide = styled(Slider)`
  .slick-list {
    //얘로 크기조정 했음
    /* width: 240px; */
    margin: 0 auto;
    background-color: #f0f9ff;
  }
`;

export const GrideGap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 15.83% 15.83% 15.83% 15.83% 15.83% 15.83%;
  gap: 1%;
  margin-bottom: 22%;
`;

export const Box = styled.div`
  position: relative;
  width: 100%;
  height: 30%;
`;
export const StPBold = styled.p`
  font-weight: 600;
  padding: 1% 0;
`;
export const StPGray = styled.p`
  color: gray;
  padding: 2% 0;
`;
export const StSpanGray = styled.span`
  color: gray;
  font-weight: 100;
`;
export const StMainWrap = styled.div`
  position: relative;
`;
export const StTextWrap = styled.div`
  padding: 1% 1% 8% 1%;
  overflow: hidden;
  box-sizing: border-box;
`;

const HeartIcon = styled.div`
  width: 50px;
  height: 50px;
`;

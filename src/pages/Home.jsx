import React from "react";
import FooterMain from "../components/FooterMain";
import { StWrapperBig } from "../components/Wrapper";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import { FlexGap } from "../components/Flex";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Filter from "../components/Flter";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { TiHeartOutline } from "react-icons/ti";
import { TiHeart } from "react-icons/ti";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    dotsClass: "slick-dots",
    nextArrow: <IoIosArrowDropright color="white" />,
    prevArrow: <IoIosArrowDropleft color="white" />,
  };
  const Div = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 16px;
    z-index: 99;
    text-align: right;
    line-height: 30px;
  `;
  const DivPre = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    left: 16px;
    z-index: 99;
    text-align: left;
    line-height: 30px;
  `;
  const queryFn = async () => {
    const response = await axios.get("http://54.180.98.74/rooms");
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["rooms"], queryFn);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;
  return (
    <StMainWrap>
      <Filter />
      <StWrapperBig>
        <FlexGap>
          {data.map((data, index) => (
            <Box key={data.id}>
              <Link to={`/detail/${data.id}`}>
                <Slider className="mainBoxWrap" {...settings} style={{}}>
                  {data.imageList.map((imageUrl, index) => (
                    <div className="mainBox" key={imageUrl.indexOf}>
                      <IoIosArrowDropleft
                        className="left arrow"
                        color="white"
                      />
                      <IoIosArrowDropright
                        className="right arrow"
                        color="white"
                      />
                      <TiHeartOutline className="heart" />
                      <TiHeart className="heart tiheart" />
                      <div className="slick-dots"></div>
                      <img src={imageUrl} alt="property" />
                    </div>
                  ))}
                </Slider>
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
        </FlexGap>
      </StWrapperBig>
      <FooterMain />
    </StMainWrap>
  );
}

export default Home;

export const Box = styled.div`
  width: 15%;
  height: 30%;
  flex: auto;
  gap: 1%;
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

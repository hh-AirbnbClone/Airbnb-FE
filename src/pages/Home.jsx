import React from "react";
import FooterMain from "../components/footer/FooterMain";
import { StWrapperBig } from "../components/Wrapper";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import { FlexGap } from "../components/Flex";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Filter from "../components/Flter";

import { Link } from "react-router-dom";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
                      <img src={imageUrl} alt="property" />
                    </div>
                  ))}
                </Slider>
              </Link>
              <StPBold>Address: {data.address}</StPBold>
              <p>{data.description}</p>
              <p>Price: {data.price}</p>
              <p>Address: {data.address}</p>
              <p>Max Guests: {data.maxGuest}</p>
              <p>Host: {data.host}</p>
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
  width: 20%;
  height: 30%;
  flex: auto;
  gap: 1%;
`;
export const StPBold = styled.p`
  font-weight: 900;
`;
export const StMainWrap = styled.div`
  position: relative;
`;

// export const Slider =styled.(Slider)`

// `

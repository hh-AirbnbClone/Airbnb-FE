import axios from "axios";
import React from "react";
import Slider from "react-slick";
import { Row } from "../components/Flex";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  //얼리리턴
  //if(!DumiData) return <div>로딩중...</div>
  //react-query

  //if(!data``) return <div>로딩중...</div>

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://54.180.98.74/rooms")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Row>
      {data.map((data, index) => (
        <Box key={data.id}>
          <Link to={`/detail/${data.id}`}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>Price: {data.price}</p>
            <p>Address: {data.address}</p>
            <p>Max Guests: {data.maxGuest}</p>
            <p>Host: {data.host}</p>
            <Slider {...settings} style={{}}>
              {data.imageList.map((imageUrl, index) => (
                <div key={imageUrl.indexOf}>
                  <img src={imageUrl} alt="property" />
                </div>
              ))}
            </Slider>
          </Link>
        </Box>
      ))}
    </Row>
  );
}
export default Home;

export const Box = styled.div`
  width: 25%;
  height: 25%;
  border: 1px solid black;
  border-radius: 10px;
  gap: 1%;
`;

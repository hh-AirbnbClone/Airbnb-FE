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

  const queryFn = async () => {
    const response = await axios.get("http://54.180.98.74/rooms");
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["rooms"], queryFn);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;
  return (
    <StMainWrap>
      <Header />
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
`
export const StTextWrap = styled.div`
  padding: 1% 1% 8% 1%;
  overflow: hidden;
  box-sizing: border-box;

`


import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../components/review/CommentList";
import AddComment from "../components/review/AddComment";
import Footer from "../components/footer/Footer";
import Reservation from "../components/reservation/Reservation";
import { StWrapperSmall } from "../components/Wrapper";
import Header from "../components/header/Header";

function Detail() {
  const { id } = useParams();

  // return 사용
  const { data, isLoading, isError } = useQuery({
    queryKey: ["GET_DETAIL"],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://54.180.98.74/rooms/details/${id}`
      );
      console.log(data.data);
      return data;
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>로딩 중...</div>;

  if (isError) return <div>에러발생.. 다시 시도해주세요.</div>;

  return (
    <DetailWrapper>
      <Header />

      <StWrapperSmall>
        <Title>{data.data?.title}</Title>
        <div>{data.data?.address}</div>
        <RoomPhotoBox>
          <LeftBigImg
            alt="thumnail_img"
            className="leftBigImg"
            src={data.data.imageList[0]}
          />
          <SmallImgBox>
            <SmallImg alt="mainImg" src={data.data.imageList[1]} />
            <SmallImg alt="mainImg" src={data.data.imageList[2]} />
          </SmallImgBox>
          <SmallImgBox>
            <SmallImg alt="mainImg" border="top" src={data.data.imageList[3]} />
            <SmallImg
              alt="mainImg"
              border="bottom"
              src={data.data.imageList[4]}
            />
          </SmallImgBox>
        </RoomPhotoBox>
        <RoomMain>
          <MainLeft>
            <CheckInfo>
              <RoomIconWrap>
                <RoomIcon>
                  <img
                    src="https://raw.githubusercontent.com/wecode-bootcamp-korea/30-2nd-YourHomeIsMine-frontend/master/src/pages/Detail/selfCheck.png"
                    alt="selfcheckin"
                  />
                  <div>
                    <span>셀프 체크인</span>
                    <p>키패드를 이용해 체크인하세요.</p>
                  </div>
                </RoomIcon>
                <RoomIcon>
                  <img
                    src="https://github.com/wecode-bootcamp-korea/30-2nd-YourHomeIsMine-frontend/blob/master/src/pages/Detail/medal.png?raw=true"
                    alt="host"
                  />
                  <div>
                    <span>훌륭한 숙소 위치</span>
                    <p>
                      최근 숙박한 게스트 중 95%가 위치에 별점 5점을 준
                      숙소입니다.
                    </p>
                  </div>
                </RoomIcon>
                <RoomIcon>
                  <img
                    src="https://github.com/wecode-bootcamp-korea/30-2nd-YourHomeIsMine-frontend/blob/master/src/pages/Detail/calendar.png?raw=true"
                    alt="chekcin"
                  />
                  <div>
                    <span>예약취소</span>
                    <p>체크인 기준 3일 전까지 무료로 취소하실 수 있습니다.</p>
                  </div>
                </RoomIcon>
              </RoomIconWrap>
              <DetailDescription>
                <img
                  src="https://a0.muscache.com/im/pictures/51a7f002-b223-4e05-a2af-0d4838411d92.jpg"
                  style={{
                    height: "25px",
                    width: "100px",
                    margin: "10px 0 10px 0",
                  }}
                  alt="description"
                />
                <p>
                  모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지
                  않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호
                  프로그램이 포함됩니다.
                </p>
                <button>더 알아보기</button>
              </DetailDescription>
              <RoomIcon>
                <RoomDescription>{data.data?.description}</RoomDescription>
              </RoomIcon>
            </CheckInfo>
            <RoomAmenity></RoomAmenity>
          </MainLeft>
          <MainRight>
            <Reservation />
          </MainRight>
        </RoomMain>
        <CommentList />
        <AddComment />
      </StWrapperSmall>
      <Footer />
    </DetailWrapper>
  );
}

export default Detail;

const DetailWrapper = styled.div`
  width: 1500px;
  margin: 0 auto;
`;
const Title = styled.div`
  font-size: 35px;
  margin: 30px 0;
`;
const DetailDescription = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 32px 0 32px 0;
  p {
    color: #707070;
  }
  button {
    padding: 0;
    margin-top: 20px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: underline;
    border: none;
    background-color: white;
  }
`;
const CheckInfo = styled.div`
  img {
    width: 24px;
    height: 24px;
  }
`;

const RoomPhotoBox = styled.div`
  display: flex;
  padding-top: 12px;
`;

const LeftBigImg = styled.img`
  width: 530px;
  height: 450px;
  border-radius: 14px;
  margin-top: 10px;
`;

const SmallImgBox = styled.div`
  display: flex;
  flex-flow: column;
  padding-left: 8px;
`;

const SmallImg = styled.img`
  margin-top: 10px;
  width: 260px;
  height: 220px;
  border-radius: 14px;
`;

const RoomMain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1065px;
`;
const MainLeft = styled.div`
  width: 626.5px;
  padding-top: 48px;
`;

const MainRight = styled.div`
  height: 100%;
  padding-top: 48px;
  padding-bottom: 48px;
  position: sticky;
  top: 0;
`;

const RoomIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  img {
    width: 50px;
    height: 30px;
    margin-right: 10px;
  }
  div span {
    font-weight: 600;
  }
  div p {
    color: #9c9c9c;
    margin-top: 4px;
  }
`;

const RoomDescription = styled.span`
  margin: 10px 0;
  font-size: 20px;
`;
const RoomIconWrap = styled.div`
  border-bottom: 1px solid lightgray;
`;
const RoomAmenity = styled.div``;

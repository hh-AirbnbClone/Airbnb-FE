import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Reservation from "../components/Reservation";
import { StWrapperSmall } from "../components/Wrapper";

function Detail() {
  // const { data, isLoading } = useQuery({
  //   //   staleTime: 60 * 1000,
  //   //   refetchIntervalInBackground: false,
  //   queryKey: ["GET_DETAIl"],
  //   queryFn: async (id) => {
  //     const data = await axios.get(`http://54.180.98.74/rooms/detail/${id}`);
  //     console.log(data.data);
  //     return data.data;
  //   },
  // });

  const [freeCancel, setFreeCancel] = useState("체크인 5일");
  function onSubmitComment(e) {
    e.preventDefault();
  }
  // if (isLoading) {
  //   return <span>Loading...</span>;
  // }

  return (
    <>
      <Reservation />
      <StWrapperSmall>
        {/* 메인 이미지 */}
        <div></div>
        {/* 호스트 */}
        {/* 체크인 정보 */}
        <CheckInfo>
          <p>
            <img
              src="https://raw.githubusercontent.com/wecode-bootcamp-korea/30-2nd-YourHomeIsMine-frontend/master/src/pages/Detail/selfCheck.png"
              alt="selfcheckin"
            />
            셀프 체크인 키패드를 이용해 체크인하세요.
          </p>
          <p>
            <img
              src="https://github.com/wecode-bootcamp-korea/30-2nd-YourHomeIsMine-frontend/blob/master/src/pages/Detail/medal.png?raw=true"
              alt="host"
            />
            훌륭한 숙소 위치 최근 숙박한 게스트 중 95%가 위치에 별점 5점을 준
            숙소입니다.
          </p>
          <p>
            <img
              src="https://github.com/wecode-bootcamp-korea/30-2nd-YourHomeIsMine-frontend/blob/master/src/pages/Detail/calendar.png?raw=true"
              alt="chekcin"
            />
            {freeCancel} 전까지 무료로 취소하실 수 있습니다.
          </p>
        </CheckInfo>
        <DetailDescription>
          <img
            src="https://a0.muscache.com/im/pictures/51a7f002-b223-4e05-a2af-0d4838411d92.jpg"
            style={{ height: "25px", width: "100px" }}
          />
          <p>
            모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
            경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
            포함됩니다.
          </p>
          <button>더 알아보기</button>
        </DetailDescription>

        {/* 후기 리스트 */}
        <CommentList></CommentList>
        {/* 후기 작성 */}
        <CommentInput>
          <form onSubmit={onSubmitComment}>
            <label>후기</label>
            <input type="text" />
            <button>작성</button>
          </form>
        </CommentInput>
        <Footer />
      </StWrapperSmall>
    </>
  );
}

export default Detail;

const DetailDescription = styled.div`
  border-bottom: 1px solid lightgray;
`;
const CheckInfo = styled.div``;
const CommentList = styled.div``;
const CommentInput = styled.div``;

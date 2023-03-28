import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function CommentList() {
  const { id } = useParams();
  const now = new window.Date();
  let year = now.getFullYear();
  let month = now.getMonth();

  const { data, isLoading } = useQuery({
    queryKey: ["GET_DETAIL"],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://54.180.98.74/rooms/details/${id}`
      );
      console.log(data.data);
      return data;
    },
  });
  if (!data || isLoading) return <div>로딩중...</div>;
  return (
    <CommentListWrapper>
      <ReviewCount>후기{data.data.reviewCount}개</ReviewCount>
      {data.data.reviewList?.map((item, i) => {
        return (
          <RealReview key={i}>
            <div>
              <Name>{}</Name>
              <Date>{`${year}년 ${month + 1}월`}</Date>
            </div>
            <div>{data.data.reviewList[i]}</div>
          </RealReview>
        );
      })}
    </CommentListWrapper>
  );
}

export default CommentList;

const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 640px;
  overflow-y: hidden;
  margin-top: 40px;
`;
const ReviewCount = styled.div``;
const RealReview = styled.div`
  display: flex;
  width: 50%;
  flex-wrap: wrap;
`;

const Name = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

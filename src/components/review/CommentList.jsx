import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function CommentList() {
  const { id } = useParams();

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["GET_DETAIL"],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://54.180.98.74/rooms/details/${id}`
      );

      
      return data;
    },
  });
  if (!data || isLoading) return <div>로딩중...</div>;
  return (
    <CommentListWrapper>
      <CommentWrapper>
        <ReviewCount>후기<span className="bolderGray">{data.data.reviewCount}</span>개</ReviewCount>
        {data.data.reviewList?.map((item, i) => {
          return (
            <RealReview key={i}>
              <div>
                <ReviewImage>
                  <img src={item.profile} alt="이미지 파일" />
                </ReviewImage>
              </div>
              <Date>{item.createdAt}</Date>
              <Name>{item.nickname}</Name>
              <Date>{item.review}</Date>
            </RealReview>
          );
        })}
      </CommentWrapper>
    </CommentListWrapper>
  );
}

export default CommentList;

const CommentListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 640px;
  overflow-y: hidden;
  margin-top: 40px;
`;
const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ReviewCount = styled.p`
  margin: 10px 0;
`;
const RealReview = styled.div`
  width: 500px;
`;

const ReviewImage = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const Name = styled.div`
  margin: 10px 0px;
  font-size: 16px;
  font-weight: 600;
`;

const Date = styled.div`
  width: 100px;
  font-size: 14px;
  font-weight: 400;
`;

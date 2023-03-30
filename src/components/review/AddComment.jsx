import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { cookies } from "../../shared/cookies";
import Button from "../Button";
function AddComment() {
  const [review, setReview] = useState([]);
  const queryClinet = useQueryClient();
  const { id } = useParams();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: async (payload) => {
      const { data } = await axios.post(
        `http://54.180.98.74/rooms/details/review/${id}`,
        { review: payload },
        {
          headers: { Authorization: `Bearer ${cookies.get("token")}` },
        }
      );
      return data.data;
    },
    onSuccess: () => {
      alert("작성 완료");
      queryClinet.invalidateQueries({ queryKey: ["GET_DETAIL"] }); // GET 요청을 다시함
    },
    onError: (res) => {
      if (res.response.data.statusCode == 401) {
        alert("로그인을 해주세요.");
      } else {
        alert(res.response.data.message);
      }
    },
  });

  const changeInputHandler = (e) => {
    setReview(e.target.value);
  };

  return (
    <CommentWrapper>
      <CommentBox>
        <CommentTitle>후기 작성</CommentTitle>
        <CommentInput
          width={"100%"}
          type="text"
          value={review}
          name="review"
          onChange={changeInputHandler}
        />
        <Button
        style={{
          margin: "10px 0",
          width: "140px",
          height: "40px",
          borderRadius: "15px",
          color: "#fff",
          float: "right"
        }}
        onClick={() => {
          mutate(review);
        }}
      >
        작성하기
      </Button>
      </CommentBox>
      
    </CommentWrapper>
  );
}

export default AddComment;
const CommentWrapper = styled.div`
  margin-top: 40px;
  padding: 24px;
border-radius: 14px;
box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;
const CommentInput = styled.input`
  padding: 1% 3%;
  width: 100%;
  margin-top: 30px !important;
  margin-bottom: 30px;
  box-sizing: border-box;
  overflow: hidden;
  font-size: 20px;
  border-radius: 8px;
  margin-top: 5px;
  border: 1px solid #707070;
`;
const CommentTitle = styled.div`
  font-weight: 900;
`;

const CommentBox = styled.div`
display: "flex",

`

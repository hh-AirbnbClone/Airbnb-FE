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
      console.log("작성하기", payload);
      const { data } = await axios.post(
        `http://54.180.98.74/rooms/details/review/${id}`,
        { review: payload },
        {
          headers: { Authorization: `Bearer ${cookies.get("token")}` },
        }
      );
      console.log("리뷰", data.data);
      return data;
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
      <div>
        <CommentTitle>후기 작성</CommentTitle>
        <CommentInput
          type="text"
          value={review}
          name="review"
          onChange={changeInputHandler}
        />
      </div>
      <Button
        style={{
          margin: "10px 0",
          width: "306px",
          height: "50px",
          borderRadius: "8px",
          color: "#fff",
        }}
        onClick={() => {
          mutate(review);
        }}
      >
        작성하기
      </Button>
    </CommentWrapper>
  );
}

export default AddComment;
const CommentWrapper = styled.div`
  margin-top: 40px;
`;
const CommentInput = styled.input`
  width: 300px;
  height: 300px;
  border-radius: 8px;
  margin-top: 5px;
  border: 1px solid #707070;
`;
const CommentTitle = styled.div``;

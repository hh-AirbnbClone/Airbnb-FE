import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { cookies } from "../../shared/cookies";

function AddComment() {
  const [review, setReview] = useState([]);
  const queryClinet = useQueryClient();
  const { id } = useParams();

  const { mutate, isLoading } = useMutation({
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
  });

  const changeInputHandler = (e) => {
    setReview(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={review}
          name="review"
          placeholder="후기"
          onChange={changeInputHandler}
        />
      </div>
      <button
        onClick={() => {
          mutate(review);
        }}
      >
        작성하기
      </button>
    </div>
  );
}

export default AddComment;

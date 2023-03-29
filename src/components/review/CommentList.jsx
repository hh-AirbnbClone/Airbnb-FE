import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

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
  return <div>{data.data.reviewList}</div>;
}

export default CommentList;
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { cookies } from "../shared/cookies";
import { TiHeartOutline, TiHeart } from "react-icons/ti";
import { useMutation, useQueryClient,useQuery } from "@tanstack/react-query";
import { useState } from "react";


export const HeartIcon = ({id}) => {
  const [clicked, setClicked] = useState(false);
  const queryClient = useQueryClient();
  const token = cookies.get("token");

  const { mutate, isLoading } = useMutation(
    async () => {
      const { data } = await axios.post(
        `http://54.180.98.74/rooms/bookmark/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return data;
    },
    {
      onSuccess: () => {
        alert("북마크 추가됨");
        queryClient.invalidateQueries("bookmarks");
      },
      onError: (error) => {
        console.error(error);
        alert(error.response?.data?.message || "오류가 발생했습니다.");
      },
      retry: 0,
    }
  );


  // const handleClick = async () => {
  //   try {
  //     setClicked(!clicked);
  //     await addMark();
  //   } catch (error) {
  //     console.error(error);
  //     setClicked(clicked);
  //     alert(error.response?.data?.message || "오류가 발생했습니다.");
  //   }
  // };

  return (
    <div className="heartWrap heart"
    >
      
    </div>
  );
};

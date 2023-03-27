import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import FooterMain from "../components/FooterMain";
import { StWrapperBig } from "../components/Wrapper";

function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["GET_DETAIl"],
    queryFn: async (id) => {
      const { data } = await axios.get("http://54.180.98.74/rooms");
      return data;
    },
  });
  if (!data || isLoading) return <div>로딩중....</div>;

  return (
    <div>
      <FooterMain />
    </div>
  );
}

export default Home;

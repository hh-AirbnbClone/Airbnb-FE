import React from "react";
import FooterMain from "../components/FooterMain";
import Login from "../components/Login";
import { StWrapperBig } from "../components/Wrapper";
function Home() {
  return (
    <StWrapperBig>
      <Login />

      <FooterMain />;
    </StWrapperBig>
  );
}

export default Home;

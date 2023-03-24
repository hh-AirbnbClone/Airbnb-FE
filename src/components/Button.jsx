import React from "react";
import styled from "styled-components";

function Button({ children, ...rest }) {
  return <StButton {...rest}>{children}</StButton>;
}

const StButton = styled.button`
  background-color: #e2165e;
  border: none;
  width: 50px;
  height: 30px;
  margin: 2.5px;
  cursor: pointer;
`;

export default Button;

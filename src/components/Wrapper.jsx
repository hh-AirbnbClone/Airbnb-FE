import React from "react";
import styled from "styled-components";

function Wrapper({ children, ...rest }) {
  return <StWrapper {...rest}>{children}</StWrapper>;
}

// function ({children}) {}

// const StWrapper = styled.div`
//   width: 95%;
//   margin: 0 auto;
// `;

// export default Wrapper;

/*----------------------------------------*
 * main
 -----------------------------------------*/
export const StWrapper = ({ children, onClick }) => {
  return <StyledBaseButton>{children}</StyledBaseButton>;
};

const StyledBaseButton = styled.button`
  cursor: pointer;
`;

/*----------------------------------------*
 * detail
 -----------------------------------------*/
export const Unset = ({ children, onClick }) => {
  return <StyledUnset>{children}</StyledUnset>;
};

const StyledUnset = styled(StyledBaseButton)`
  border: none;
  background-color: transparent;
`;

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;

// 박스의 색을 배열에 담습니다.
const boxList = ["red", "green", "blue"];

// 색을 넣으면, 이름을 반환해주는 함수를 만듭니다.
const getBoxName = (color) => {
  switch (color) {
    case "dital":
      return "빨간 박스";
    default:
      return "검정 박스";
  }
};

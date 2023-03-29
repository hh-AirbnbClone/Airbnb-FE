import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import { Logo } from "../Logo";
import {LanguageIcon} from "./LanguageIcon";
import LoginModal from "../LoginModal";
import { Row } from "../Flex";
import { AiOutlineSearch } from 'react-icons/ai';
import SearchBarArear from"../../components/searchBar/SearchBarArear"

function Header({showhRooms, setShowSearchRooms}) {
  const [isOpenModal , setIsOpenModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const ref = useRef();
  // 카카오로그인 모달
  const handleCloseModal = (e) => {
  }
  // 검색 조회
  const handleSearchClick = () => {
    setShowSearch(true);
  }

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShowSearch(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <>
    <StHeaderWrapper >
      <StHeader>
        <Logo/>
        <div>
      <StSerchWrapper onClick={handleSearchClick}>
        <StSpanBold className="leteLine">어디든지 </StSpanBold>
        <StSpanBold className="leteLine"> 언제든 일주일 </StSpanBold>
        <span>인원</span>
        <StSpanIconWrap>
        <AiOutlineSearch className="MainColor" size="16" color="white"></AiOutlineSearch>
        </StSpanIconWrap>
      </StSerchWrapper>
      
    </div>
        <Row>
          <StSpanBold>당신의 공간을 에어비앤비하세요</StSpanBold>
          <LanguageIcon/>
          <div onClick={() => setIsOpenModal(true)}>로그인하기{isOpenModal && <LoginModal setIsOpenModal={setIsOpenModal} />}</div>
          
        </Row>
        <LoginModal />
      </StHeader>
      <StCalendar>
      {showSearch &&
        <span ref={ref}>
          <SearchBarArear />
        </span>
      }
      </StCalendar>
    </StHeaderWrapper>
    </>
  );
}
export default Header;
const StHeaderWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 2% 0;
  border-top: 1px solid gray;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  justify-content: space-between;

`;
const StSerchWrapper = styled.div`
 width: max-content;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding:15px 20px;
 border-radius: 50px;
 cursor: pointer;
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid gray;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  border: 1px solid #eeeeee;
span{

  padding:4px 5px;
  box-sizing: border-box;
  overflow: hidden;
}
`;
const StSpanIconWrap = styled.span`
border-radius: 50px;
width: 25px;
height: 25px;
background-color: #ff385c;
display: flex;
align-items: center;
`
const StHeader = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

`
const StSpanBold = styled.span`
  font-weight: 900;
`

const StCalendar = styled.div`
  position : absolute;
  top :70%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  z-index: 8;
`;


import React from 'react'
import { useState } from "react";
import moment from "moment";
import { DayPickerRangeController } from "react-dates";
import "moment/locale/ko";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import axios from "axios";
import Select from 'react-select';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { useRef ,useEffect } from 'react';

const SearchBarArear = ({
  blockedDates,
  address,
  guestNum,
  onChange,
  setAddress, 
  setGuestNum, 
  setIsOpenModal
}) => {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState("startDate");
  const blockedDate = useState(blockedDates)[0];

  const [ok, setOk]=useState(false);

  const currentMonth = moment();
  const Today = moment().format().substring(0, 10);
  const startDay = new Date(startDate);
  const endDay = new Date(endDate);
  const checkInDate = new Date(startDate).toISOString().substring(0, 10);
  const checkOutDate = new Date(endDate).toISOString().substring(0, 10);    
  
  
  const [date, setDate] = useState('');
  const [showSearch, setShowSearch] = useState(false);


  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleGuestNumChange = (e) => {
    setGuestNum(e.target.value);
  };

  const handleCloseModal = (e) => {
    setShowSearch(false);
  }
  
  const handleSearchClick = () => {
    setShowSearch(true);
  }

  function handleDateChange() {
    onChange(checkInDate, checkOutDate);
  }
  const modalRef = useRef()
  useEffect(()=>{
    const handleClickOutside=(event)=>{
      if(modalRef.current && !modalRef.current.contains(event.target)){
        setIsOpenModal(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
      return () =>{
        document.removeEventListener('mousedown', handleClickOutside)
      }
  },[modalRef,setIsOpenModal])

  const isBlocked = (day) => {
    let result = false;
    const newDay = moment(day.format("YYYY-MM-DD"));

    // 체크인 체크아웃이 둘다 선택.
    // 체크인 날짜, 체크아웃 날짜, 체크인 체크아웃 사이의 날짜를 제외한 나머지 블록
    if (startDate !== null && endDate !== null) {
      const newStart = moment(startDate.format("YYYY-MM-DD")).subtract(
        1,
        "days"
      );
      const newEnd = moment(endDate.format("YYYY-MM-DD")).add(1, "days");
      result = !newDay.isBetween(newStart, newEnd);
      return result;

      // 둘다 선택안함.
    } else {
      result =
        blockedDate?.some((date) => day.format("YYYY-MM-DD") === date) ||
        day.isBefore(moment());
      return result;
    }
  };

  return (


    <div className='Homecalendar' >
      <div  ref={modalRef}>
      <div className='selectWrap' >
      <select value={address} onChange={handleAddressChange}>
        나라를 선택하세요
        <option value="미국">미국</option>
      
        <option value="인도네시아">인도네시아</option>
        <option value="오스트렐리아">오스트렐리아</option>
        <option value="인도네시아">인도네시아</option>
      </select>
        <select value={guestNum} onChange={handleGuestNumChange}>
          인원을 선택하세요
          <option value="1">1명</option>
          <option value="2">2명</option>
          <option value="3">3명</option>
          <option value="4">4명</option>
        </select>
      </div>
        <DatePickerSection
         
        >
          <DayPickerRangeController
           
             focusedInput={focusedInput}
             startDate={startDate}
             endDate={endDate}
             numberOfMonths={2}
             onDatesChange={({ startDate, endDate }) => {
               setStartDate(startDate);
               setEndDate(endDate);
             }}
            
            onFocusChange={(focusedInput) => {
              setFocusedInput("endDate");
            }}

            isDayBlocked={isBlocked}

            navPrev={
              <PreButton>
                <p>저번 달</p>
              </PreButton>
            }
            navNext={
              <NextButton>
                <p>다음 달</p>
              </NextButton>
            }
          />
      <TodayDate>{Today}</TodayDate>
      <button type="button" onClick={handleDateChange}>
    조회하기</button>
      <ClearButtonWrapper></ClearButtonWrapper>
    </DatePickerSection>
      </div>
      
    </div>

  )
}

export default SearchBarArear


const DatePickerSection = styled.section`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 12px;
  font-family: sans-serif;
  .DayPicker__withBorder {
    border-radius: 12px;
  }
  //단축키로 달력 조정
  .DayPickerKeyboardShortcuts_buttonReset {
    display: none;
  }
  .DayPicker_focusRegion {
    border-radius: 12px;
  }
  .DayPicker_transitionContainer__horizontal_2 {
    border: none;
  }
  //날짜 칸 칸에 대한 스타일 적용
  .CalendarDay__default {
    border: none;
    border-radius: 50%;
    vertical-align: middle;
    outline: none;
    //호버시 날짜에 대한 효과 적용
    &:hover {
      background: transparent;
      border: none;
      color: black;
      box-shadow: inset 0 0 0 1px black;
    }
  }
  .CalendarDay__blocked_calendar,
  .CalendarDay__blocked_calendar:active,
  .CalendarDay__blocked_calendar:hover {
    background: white;
    border: none;
    color: #d2d2d2;
    box-shadow: none;
    text-decoration: line-through;
  }
  //날짜 선택시 선택된 날짜 색상 적용
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: black;
    border: none;
    color: white;
  }
  .CalendarDay__selected_span,
  .CalendarDay__hoverd__span {
    width: 100px;
    background-color: #e2e2e2;
  }
  //날짜 사이의 간격조정
  .CalendarMonth_caption {
    margin-bottom: 10px;
  }
`;

//이전, 다음 달로 이동하는 버튼
const NavButtonForm = styled.div`
  position: absolute;
  top: 21px;
  .svg-icon {
    width: 20px;
    height: 20px;
    path,
    polygon,
    rect {
      fill: #484848;
    }
  }
`;

//이전 버튼
const PreButton = styled(NavButtonForm)`
  left: 40px;
`;

//다음 버튼
const NextButton = styled(NavButtonForm)`
  right: 40px;
`;

const TodayDate = styled.h2`
  position: absolute;
  top: 10px;
  font-size: 12px;
`;

const CheckButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  color: #484848;
  outline: none;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const ClearButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 20px;
`;

const ClearButton = styled.button`
  width: 84px;
  height: 30px;
  background-color: white;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  color: #484848;
  outline: none;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;
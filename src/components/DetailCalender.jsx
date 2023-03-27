import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { DayPickerRangeController } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

function DetailCalender({
  blockedDates,
  setOpenModal,
  toStayCount,
  toCheckinPut,
  toCheckOut,
}) {
  const [focusedInput, setFocusedInput] = useState("startDate");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [initialMonth, setInitialMonth] = useState(moment(new Date()));
  const blockedDate = useState(blockedDates)[0];

  const isBlocked = (day) => {
    let result = false;
    const newDay = moment(day.format("YYYY-MM-DD"));

    const closestNextBlockedDate = (target, blockedDates) => {
      const nextBlockedDate = blockedDates
        ?.map((date) => moment(date, "YYYY-MM-DD"))
        .sort((date) => date.valueOf())
        .find((date) => date.isAfter(target));
      return nextBlockedDate;
    };

    // Case #1. 체크인 체크아웃이 둘다 선택.
    if (startDate !== null) {
      const newStart = moment(startDate.format("YYYY-MM-DD")).subtract(
        1,
        "days"
      );
      const nextBlockedDate = closestNextBlockedDate(newStart, blockedDate);
      if (nextBlockedDate) {
        result = !newDay.isBetween(newStart, nextBlockedDate);
      } else {
        newStart.add(1, "days");
        result = newDay.isBefore(newStart);
      }
      return result;

      // Case #3. 체크아웃만 선택.
    } else {
      result =
        blockedDate?.some((date) => day.format("YYYY-MM-DD") === date) ||
        day.isBefore(moment());
      return result;
    }
  };

  const startDay = new Date(startDate);
  const endDay = new Date(endDate);
  const stayday = endDay.getDate() - startDay.getDate();

  const checkinDay = new Date(startDate).toISOString().substring(0, 10);
  const checkoutDay = new Date(endDate).toISOString().substring(0, 10);

  return (
    <DatePicker>
      <DayPickerRangeController
        focusedInput={focusedInput}
        startDate={startDate}
        endDate={endDate}
        numberOfMonths={2}
        minDate={2}
        initialVisibleMonth={() => initialMonth}
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        onFocusChange={(focusedInput) => {
          setFocusedInput("endDate");
        }}
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
      <CheckButton
        onClick={() => {
        }}
      >
        확인
      </CheckButton>
    </DatePicker>
  );
}
export default DetailCalender;

const DatePicker = styled.div``;
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

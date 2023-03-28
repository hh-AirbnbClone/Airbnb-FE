import { useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import { DayPickerRangeController } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import styled from "styled-components";

const DetailCalender = ({
  blockedDates,
  updateStartDate,
  updateEndDate,
  clearPosition,
  setOpenModal,
  toCheckinPut,
  toCheckOut,
  toStayCount,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState("startDate");
  const blockedDate = useState(blockedDates)[0];

  const closetNextBlockedDate = (target, blockedDates) => {
    const nextBlockedDate = blockedDates
      ?.map((date) => moment(date, "YYYY-MM-DD"))
      .sort((date) => date.valueOf())
      .find((date) => date.isAfter(target));
    return nextBlockedDate;
  };

  const isBlocked = (day) => {
    let result = false;
    const newDay = moment(day.format("YYYY-MM-DD"));

    // Case #1. 체크인 체크아웃이 둘다 선택.
    if (startDate !== null) {
      const newStart = moment(startDate.format("YYYY-MM-DD")).subtract(
        1,
        "days"
      );
      const nextBlockedDate = closetNextBlockedDate(newStart, blockedDate);
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

  // //TODO: endDate 값이 있다면 setOpenModal를 닫기

  const Today = moment().format().substring(0, 10);
  const checkinDay = new Date(startDate).toISOString().substring(0, 10);
  const checkoutDay = new Date(endDate).toISOString().substring(0, 10);

  //TODO: startDate 값을 input의 value 값으로 전달
  //TODO: 체크인 기준 5일 전 날짜 구하여 넘겨줌

  const startDay = new Date(startDate);
  const endDay = new Date(endDate);
  const stayday = endDay.getDate() - startDay.getDate();

  return (
    <DatePickerSection>
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
      <CheckButton
        onClick={() => {
          toCheckinPut(checkinDay);
          toCheckOut(checkoutDay);
          setOpenModal(false);
          toStayCount(stayday);
        }}
      >
        확인
      </CheckButton>
      <ClearButtonWrapper></ClearButtonWrapper>
    </DatePickerSection>
  );
};

export default DetailCalender;

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
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
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

// import React, { useState } from "react";
// import styled from "styled-components";
// import moment from "moment";
// import { DayPickerRangeController } from "react-dates";
// import "react-dates/initialize";
// import "react-dates/lib/css/_datepicker.css";

// function DetailCalender({
//   blockedDates,
//   setOpenModal,
//   toStayCount,
//   toCheckinPut,
//   toCheckOut,
// }) {
//   const [focusedInput, setFocusedInput] = useState("startDate");
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   //날짜 선택
//   const startDay = new Date(startDate);
//   const endDay = new Date(endDate);
//   const stayday = endDay.getDate() - startDay.getDate();
//   const checkinDay = new Date(startDate).toISOString().substring(0, 10);
//   const checkoutDay = new Date(endDate).toISOString().substring(0, 10);
//   console.log(checkinDay);
//   console.log(checkoutDay);

//   function isBlocked(day) {
//     let result = false;

//     if (startDate !== null) {
//       const newStart = moment(startDate.format("YYYY-MM-DD")).subtract(1, "d");

//     }
//   }
//   return (
//     <DatePicker>
//       <DayPickerRangeController
//         focusedInput={focusedInput}
//         startDate={startDate}
//         endDate={endDate}
//         numberOfMonths={2}
//         minDate={2}
//         isDayBlocked={isBlocked}
//         onDatesChange={({ startDate, endDate }) => {
//           setStartDate(startDate);
//           setEndDate(endDate);
//         }}
//         onFocusChange={(focusedInput) => {
//           setFocusedInput("endDate");
//         }}
//         navPrev={
//           <PreButton>
//             <p>저번 달</p>
//           </PreButton>
//         }
//         navNext={
//           <NextButton>
//             <p>다음 달</p>
//           </NextButton>
//         }
//       />
//       <CheckButton
//         onClick={() => {
//           toCheckinPut(checkinDay);
//           toCheckOut(checkoutDay);
//           setOpenModal(false);
//           toStayCount(stayday);
//         }}
//       >
//         확인
//       </CheckButton>
//     </DatePicker>
//   );
// }
// export default DetailCalender;

// const DatePicker = styled.div`
//   padding: 50px 0;
//   .DayPicker__withBorder {
//     border-radius: 10px;
//   }
//   //날짜 칸 칸에 대한 스타일 적용
//   .CalendarDay__default {
//     border: none;
//     border-radius: 50%;
//     vertical-align: middle;
//     outline: none;
//     //호버시 날짜에 대한 효과 적용
//     &:hover {
//       background: transparent;
//       border: none;
//       color: black;
//     }
//   }
//   .CalendarDay__blocked_calendar,
//   .CalendarDay__blocked_calendar:active,
//   .CalendarDay__blocked_calendar:hover {
//     background: white;
//     border: none;
//     color: #d2d2d2;
//     box-shadow: none;
//     text-decoration: line-through;
//   }
//   //날짜 선택시 선택된 날짜 색상 적용
//   .CalendarDay__selected,
//   .CalendarDay__selected:active,
//   .CalendarDay__selected:hover {
//     background: black;
//     border: none;
//     color: white;
//   }
//   .CalendarDay__selected_span,
//   .CalendarDay__hoverd__span {
//     width: 100px;
//     background-color: #e2e2e2;
//   }
//   //날짜 사이의 간격조정
//   .CalendarMonth_caption {
//     margin-bottom: 10px;
//   }
// `;

// //이전, 다음 달로 이동하는 버튼
// const NavButtonForm = styled.div`
//   position: absolute;
//   top: 21px;
// `;
// //이전 버튼
// const PreButton = styled(NavButtonForm)`
//   left: 40px;
// `;
// //다음 버튼
// const NextButton = styled(NavButtonForm)`
//   right: 40px;
// `;

// const CheckButton = styled.button`
//   background-color: lightgray;
//   border: none;
//   border-radius: 20px;
//   font-weight: bold;
//   color: #484848;
//   outline: none;
//   text-decoration: none;
//   cursor: pointer;
//   &:hover {
//     background-color: #f7f7f7;
//   }
// `;

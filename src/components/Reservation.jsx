import React, { useState } from "react";
import styled from "styled-components";
import { Row } from "../components/Flex";

function Reservation() {
  const [stayCount, setStayCount] = useState(1);
  const [price, setPrice] = useState(1);
  const [checkDate, setCheckDate] = useState({
    checkinDate: "날짜 추가",
    checkoutDate: "날짜 추가",
  });

  const onCheckHandler = (e) => {
    const [name, value] = e.target;
    setCheckDate((pre) => ({ ...pre, [name]: value }));
  };

  const reservationSuccess = () => {
    alert("예약이 완료되었습니다.");
  };
  return (
    <ReservationWrapper>
      <div>
        <strong>₩{Number().toLocaleString()}</strong> <span>/ 박</span>
      </div>
      {/* 날짜 인풋 */}
      <GuestSetting>
        <DayInput>
          <CheckInput check="in">
            <p>체크인</p>
            <input
              placeholder="날짜 추가"
              name="checkinDate"
              value={checkDate.checkinDate}
              type="text"
              onChange={onCheckHandler}
            />
          </CheckInput>

          <CheckInput check="out">
            <p>체크아웃</p>
            <input
              placeholder="날짜 추가"
              value={checkDate.checkoutDate}
              name="checkoutDate"
              type="text"
              onChange={onCheckHandler}
            />
          </CheckInput>
        </DayInput>
        <CheckGuest>
          <p>인원</p>
          <input type="text" min="1" max="10" placeholder={`게스트 {}명`} />
        </CheckGuest>
        <ReservationButton onClick={reservationSuccess}>
          예약 하기
        </ReservationButton>
      </GuestSetting>
      <TotalPrice>
        <h3>총 합계</h3>
        <h3>₩{Number(stayCount * price).toLocaleString()}</h3>
      </TotalPrice>
    </ReservationWrapper>
  );
}

export default Reservation;
const ReservationWrapper = styled.div`
  padding: 24px;
  width: 357px;
  height: 330px;
  border-radius: 14px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
`;
const DayInput = styled.div`
  display: flex;
  width: 350px;
`;
const GuestSetting = styled.div``;
const CheckInput = styled.div`
  position: relative;
  margin: 0;
  padding: 26px 12px 10px;
  width: 153px;
  height: 56px;
  border: 1px solid rgb(113, 113, 113);
  border-bottom: none;
  :nth-child(2) {
    border-left: none;
  }
  p {
    position: absolute;
    left: 10px;
    top: 10px;
    font-size: 10px;
    font-weight: 700;
    color: rgb(34, 34, 34);
  }
  input {
    width: 98%;
    border-style: none;
  }
`;
const CheckGuest = styled.div`
  position: relative;
  width: 348px;
  height: 56px;
  border: 1px solid rgb(113, 113, 113);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
  p {
    position: absolute;
    left: 10px;
    top: 10px;
    font-size: 10px;
    font-weight: 700;
    color: rgb(34, 34, 34);
  }
  input {
    margin-top: 10px;
    padding: 24px 155px 0 12px;
    all: outline;
    border: none;
    background-color: white;
    cursor: pointer;
  }
  img {
    position: absolute;
    top: 20px;
    right: 12px;
    width: 16px;
    height: 16px;
  }
`;

const ReservationButton = styled.button`
  margin: 18px 0;
  width: 100%;
  height: 48px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #ea1e61;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
  font-size: 18px;
  font-weight: 500;
`;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";

function Reservation() {
  const [stayCount, setStayCount] = useState(1);

  const [checkinDate, setCheckinDate] = useState("날짜 추가");
  const [checkoutDate, setCheckoutDate] = useState("날짜 추가");
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  // return 사용
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["GET_DETAIL"],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://54.180.98.74/rooms/details/${id}`
      );
      return data;
    },
  });

  // checkin input값 가져오기
  const toCheckinPut = (e) => {
    setCheckinDate(e);
  };
  // checkout input값 가져오기
  const toCheckOut = (e) => {
    setCheckoutDate(e);
  };
  // 날짜 수 가져오기
  const toStayCount = (e) => {
    setStayCount(e);
  };

  const reservationSuccess = () => {
    alert("예약이 완료되었습니다.");
  };
  return (
    <ReservationWrapper>
      <SubTitle>여행 날짜를 선택해 정확한 금액을 확인해보세요</SubTitle>
      <div>
        <strong>₩{Number(data.data.price).toLocaleString()}</strong>{" "}
        <span>/ 박</span>
      </div>
      {/* 날짜 인풋 */}
      <GuestSetting>
        <DayInput>
          <CheckInput check="in">
            <p>체크인</p>
            <input
              placeholder="날짜 추가"
              value={checkinDate}
              name="checkinDate"
              type="text"
              onChange={toCheckinPut}
              onClick={() => {
                setOpenModal(true);
              }}
            />
          </CheckInput>
          {openModal && (
            <Modal
              toStayCount={toStayCount}
              checkinDate={checkinDate}
              setOpenModal={setOpenModal}
              toCheckinPut={toCheckinPut}
              toCheckOut={toCheckOut}
              setCheckinDate={setCheckinDate}
            />
          )}
          <CheckInput check="out">
            <p>체크아웃</p>
            <input
              placeholder="날짜 추가"
              value={checkoutDate}
              name="checkoutDate"
              type="text"
              onChange={toCheckOut}
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
        <h3>₩{Number(stayCount * data.data.price).toLocaleString()}</h3>
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

const SubTitle = styled.h4`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.fontColorGray};
`;

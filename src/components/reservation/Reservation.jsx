import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { cookies } from "../../shared/cookies";
import Modal from "./Modal";

function Reservation() {
  const [stayCount, setStayCount] = useState(1);
  const queryClinet = useQueryClient();
  const [checkInDate, setCheckinDate] = useState("날짜 추가");
  const [checkOutDate, setCheckoutDate] = useState("날짜 추가");
  const [openModal, setOpenModal] = useState(false);
  const [inputPeople, setInputPeople] = useState("");

  console.log(checkInDate, checkOutDate, inputPeople);

  const { id } = useParams();
  // return 사용
  const { data } = useQuery({
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
  // 인원수 input값 가져오기
  const toCheckPeople = (e) => {
    setInputPeople(e.target.value);
  };
  // 날짜 수 가져오기
  const toStayCount = (e) => {
    setStayCount(e);
  };

  const { mutate, onError } = useMutation({
    mutationFn: async (payload) => {
      console.log("예약하기", payload);
      const { data } = await axios.post(
        `http://54.180.98.74/rooms/details/reservation/${id}`,
        {
          checkInDate: payload.checkInDate,
          checkOutDate: payload.checkOutDate,
          guestNum: payload.inputPeople,
        },
        {
          headers: { Authorization: `Bearer ${cookies.get("token")}` },
        }
      );
      return data;
    },
    onSuccess: () => {
      alert("예약 완료");
      queryClinet.invalidateQueries({ queryKey: ["GET_DETAIL"] }); // GET 요청을 다시함
    },
    onError: () => {
      alert("로그인을 해주세요.");
    },
  });

  return (
    <ReservationWrapper>
      <SubTitle>여행 날짜를 선택해 정확한 금액을 확인해보세요</SubTitle>
      <div>
        <strong>₩{Number(data.data.price).toLocaleString()}</strong>{" "}
        <span>/ 박</span>
      </div>
      {/* 날짜 인풋 */}
      <GuestSetting
        onSubmit={(e) => {
          e.preventDefault();
          mutate({ checkInDate, checkOutDate, inputPeople });
        }}
      >
        <DayInput>
          <CheckInput check="in">
            <p>체크인</p>
            <input
              placeholder="날짜 추가"
              value={checkInDate}
              name="checkInDate"
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
              checkinDate={checkInDate}
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
              value={checkOutDate}
              name="checkOutDate"
              type="text"
              onChange={toCheckOut}
            />
          </CheckInput>
        </DayInput>
        <CheckGuest>
          <select
            value={inputPeople}
            name="inputPeople"
            onChange={toCheckPeople}
            style={{ width: "348px", height: "50" }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </CheckGuest>
        <ReservationButton>예약 하기</ReservationButton>
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
const GuestSetting = styled.form``;
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

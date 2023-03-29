import React from "react";
import styled from "styled-components";
import DetailCalender from "./DetailCalender";


function Modal({
  toStayCount,
  setOpenModal,
  toCheckinPut,
  setCheckinDate,
  toCheckOut,
}) {
  return (
    <OpenModal>

      <DetailCalender
        toStayCount={toStayCount}
        setOpenModal={setOpenModal}
        toCheckinPut={toCheckinPut}
        setCheckinDate={setCheckinDate}
        toCheckOut={toCheckOut}
      />

      <CloseModal onClick={() => setOpenModal(false)}>X</CloseModal>
    </OpenModal>
  );
}

export default Modal;

const OpenModal = styled.div`
  position: absolute;
  left: -262px;
  z-index: 100;
  margin: 0;
  border-radius: 12px;
`;

const CloseModal = styled.button`
  position: absolute;
  top: 4px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  background-color: white;
  &:hover {
    background-color: rgb(247, 247, 247);
  }
`;

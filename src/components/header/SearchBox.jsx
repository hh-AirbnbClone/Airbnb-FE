import React from "react";
import styled from "styled-components";
import { Column, Row } from "../Flex";

export const SearchBox = ({ onClose }) => {
  return (
    <StSearchBoxWrapper onClick={onClose}>
      <Row>
        <div className="seachbox">
          <NoneInput id="radio_1" type="radio" name="qna_1_group" value="1" />
          <label htmlFor="radio_1">
            <p>1</p>
          </label>
        </div>

        <div className="basicBox">
          <NoneInput id="radio_2" type="radio" name="qna_1_group" value="2" />
          <label htmlFor="radio_2">
            <p>2</p>
          </label>
        </div>

        <div className="basicBox">
          <NoneInput id="radio_3" type="radio" name="qna_1_group" value="3" />
          <label htmlFor="radio_3">
            <p>3</p>
          </label>
        </div>
      </Row>
    </StSearchBoxWrapper>
  );
};

const NoneInput = styled.input`
  display: none;
`;
const StSearchBoxWrapper = styled.div``;

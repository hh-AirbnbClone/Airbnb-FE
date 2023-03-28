import React from 'react'
import styled from 'styled-components'
import { Column, Row } from './Flex'
import HomeCalendar from './HomeCalendar'

export const SearchBox = ({ onClose }) => {
    

  return (
    <StSearchBoxWrapper 
    // onClick={onClose}
    >
        <Row >
            {/* <HomeCalendar/> */}
        </Row>
    </StSearchBoxWrapper>

  )
}


const NoneInput =styled.input`
    display: none;
`
const StSearchBoxWrapper = styled.div`
    
`
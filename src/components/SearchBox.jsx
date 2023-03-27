import React from 'react'
import styled from 'styled-components'
import { Column, Row } from './Flex'

export const SearchBox = () => {
  return (
    <Row >
        <div className='basicBox' >
            <NoneInput id="radio_1" type="radio" name="qna_1_group" value="1"/>
            <label htmlFor="radio_1">
                <p>1</p>
            </label>                 
        </div>            

        <div className='basicBox' >
            <NoneInput id="radio_2" type="radio" name="qna_1_group" value="2"/>
            <label htmlFor="radio_2">
                <p>2</p>
            </label>                 
        </div>

        <div className='basicBox' >
            <NoneInput id="radio_3" type="radio" name="qna_1_group" value="3" />
            <label htmlFor="radio_3">
                <p>3</p>
            </label>                 
        </div>


        <div className='basicBox' >
            <NoneInput id="radio_4" type="radio" name="qna_1_group" value="4" />
            <label htmlFor="radio_4">
                <p>4</p>
            </label>                 
        </div>


        <div className='basicBox' >
            <NoneInput id="radio_5" type="radio" name="qna_1_group" value="5"/>
            <label htmlFor="radio_5">
                <p>5</p>
            </label>                 
        </div>
</Row>

  )
}


const NoneInput =styled.input`
    display: none;
`
import React from 'react'
import styled from 'styled-components'

import Colors from '../themes/Colors'
import { CenterRow, CenterColumn, MiddleCenterColumn, MiddleCenterRow } from '../themes/StyleConstants'

export default function Card({ title, values = [], withPhoto, source, size = 'small', buttons = [], direction = 'row' }) {
    return (
        <Content size={size} direction={direction}>
            {
                withPhoto ?
                    <Profile direction={direction} size={size}>
                        <Image source={source} />
                    </Profile>
                    : null
            }
            <Body withPhoto={withPhoto} size={size} direction={direction}>
                <Title>{title}</Title>
                {
                    values.map((value, index) => (
                        <Line key={index}>
                            <Label>{value.label}: </Label>
                            <Text>{value.text}</Text>
                        </Line>
                    ))
                }
                <RowButtons hasButton={buttons.length}>
                    {
                        buttons.map((button, index) => (
                            <Box key={index} index={index}>
                                {button}
                            </Box>
                        ))
                    }
                </RowButtons>
            </Body>
        </Content>
    )
}

const Content = styled.div`
    ${props => props.direction === 'row' ? CenterRow : CenterColumn}
    width: ${props => props.size === 'small' ? 32 : (props.size === 'medium' ? 48 : 100)}%;
    min-width: 300px;
    /* height: ${props => props.size === 'small' ? 180 : 250}px; */
    margin: 0px 10px 20px 10px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    background-color: ${Colors.white};
    box-sizing: border-box;

    @media (max-width: 1520px) {
        width: ${props => props.size === 'small' ? 48 : 100}%;
    }

    @media (max-width: 1040px) {
        width: 70%;
    }

    @media (max-width: 700px) {
        width: 95%;
    }
`

const Profile = styled.div`
    ${CenterRow}
    width: ${props => props.direction === 'row' ? (props.size === 'small' ? 28 : 32) : 100}%;
    height: ${props => props.direction === 'row' ? '100%' : '200px'};
    margin-bottom: ${props => props.direction === 'row' ? '0' : '10'}px;
    padding-right: ${props => props.direction === 'row' ? '10' : '0'}px;
    box-sizing: border-box;

    @media (max-width: 520px) {
        width: ${props => props.direction === 'row' ? '40' : '100'}%;
    }
`

const Image = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-size: cover;
    background-position: center;
    background-image: url('${props => props.source}');
`

const Body = styled.div`
    ${MiddleCenterColumn}
    width: ${props => props.withPhoto ? (props.direction === 'row' ? (props.size === 'small' ? 72 : 68) : 100) : 100}%;
    height: 100%;
    box-sizing: border-box;

    @media (max-width: 520px) {
        width: ${props => props.withPhoto ? (props.direction === 'row' ? 60 : 100) : 100}%;
    }
`

const Title = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 20px;
    margin-bottom: 5px;

    @media (max-width: 520px) {
        font-size: 16px;
    }
`

const Line = styled.div`
    ${MiddleCenterRow}
    width: 100%;
`

const Label = styled.h2`
    font-size: 17px;

    @media (max-width: 520px) {
        font-size: 14px;
    }
`

const Text = styled.h2`
    font-weight: normal;
    font-size: 17px;
    margin-left: 6px;

    @media (max-width: 520px) {
        font-size: 14px;
    }
`

const RowButtons = styled.div`
    ${CenterRow}
    width: 100%;
    margin-top: ${props => props.hasButton > 0 ? 6 : 0}px;
    padding-top: ${props => props.hasButton > 0 ? 6 : 0}px;
    border-top: solid 1px ${props => props.hasButton > 0 ? Colors.lightGray : Colors.white};

    @media (max-width: 400px) {
        flex-wrap: wrap;
    }
`

const Box = styled.div`
    box-sizing: border-box;
    margin-left: ${props => props.index > 0 ? 8 : 0}px;
`
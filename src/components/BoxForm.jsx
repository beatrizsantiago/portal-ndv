import React from 'react'
import styled from 'styled-components'

import Colors from '../themes/Colors'
import { CenterRow, MiddleCenterColumn } from '../themes/StyleConstants'

export default function BoxForm({ title, buttons = [], children }) {
    return (
        <Form>
            <LabelTitle>
                <Title>{title}</Title>
            </LabelTitle>

            {children}

            <RowButtons>
                {
                    buttons.map((button, index) => (
                        <Box key={index} index={index}>
                            {button}
                        </Box>
                    ))
                }
            </RowButtons>
        </Form>
    )
}

const Form = styled.div`
    ${MiddleCenterColumn}
    position: relative;
    width: 70%;
    min-width: 280px;
    margin-top: 50px;
    padding: 45px 15px 15px 15px;
    border-radius: 5px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    background-color: ${Colors.white};
`

const LabelTitle = styled.div`
    ${CenterRow}
    position: absolute;
    top: -30px;
    width: 70%;
    min-width: 180px;
    height: 60px;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: ${Colors.primary};
`

const Title = styled.h1`
    color: ${Colors.white};
    font-weight: normal;
    font-size: 20px;
`

const RowButtons = styled.div`
    ${CenterRow}
    width: 100%;
`

const Box = styled.div`
    box-sizing: border-box;
    margin-left: ${props => props.index > 0 ? 8 : 0}px;
`
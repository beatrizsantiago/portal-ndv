import React from 'react'
import styled from 'styled-components'

import Colors from '../themes/Colors'
import { CenterRow } from '../themes/StyleConstants'

export default function MessageBox({ type = 'error', text }) {

    const getColor = () => {
        if (type === 'success') {
            return Colors.green
        } else if (type === 'warn') {
            return Colors.yellow
        } else if (type === 'error') {
            return Colors.red
        } else if (type === 'info') {
            return Colors.blue
        }
    }

    const getRgba = () => {
        if (type === 'success') {
            return Colors.greenTransparent1
        } else if (type === 'warn') {
            return Colors.yellowTransparent1
        } else if (type === 'error') {
            return Colors.redTransparent1
        } else if (type === 'info') {
            return Colors.blueTransparent1
        }
    }

    return (
        <Container color={getRgba()}>
            <Text color={getColor()}>{text}</Text>
        </Container>
    )
}

const Container = styled.div`
    ${CenterRow}
    width: 100%;
    padding: 6px 15px;
    margin: 10px 0px;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: ${props => props.color};
`

const Text = styled.h2`
    color: ${props => props.color};
    font-size: 16px;
    text-align: center;
`
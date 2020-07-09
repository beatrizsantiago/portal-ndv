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
            return 'rgba(0, 176, 12, 0.1)'
        } else if (type === 'warn') {
            return 'rgba(240, 208, 0, 0.1)'
        } else if (type === 'error') {
            return 'rgba(255, 0, 0, 0.1)'
        } else if (type === 'info') {
            return 'rgba(0, 158, 225, 0.1)'
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
`
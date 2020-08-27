import React from 'react'
import styled from 'styled-components'

import Colors from '../themes/Colors'

export default function InputTextArea({ value, onChange, label, disabled, height }) {
    return (
        <Container>
            <Label disabled={disabled}>{label}</Label>
            <DataInput value={value} onChange={onChange} placeholder="Digite aqui..." disabled={disabled} maxLength={500} height={height} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
`

const Label = styled.h2`
    color: ${props => props.disabled === true ? Colors.lightGray : Colors.primary};
    font-size: 16px;
    margin-bottom: 5px;

    @media (max-width: 600px) {
        font-size: 14px;
    }
`

const DataInput = styled.textarea`
    width: 100%;
    height: ${props => props.height || 100}px;
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    border: solid 1px ${Colors.lightGray};
    box-sizing: border-box;
    background-color: ${Colors.iceWhite};

    :focus{
        border: 2px solid ${Colors.lightGray};
    }
`
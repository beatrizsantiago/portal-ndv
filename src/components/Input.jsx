import React from 'react'
import styled from 'styled-components'

import Colors from '../themes/Colors'
import { MiddleCenterRow } from '../themes/StyleConstants'

export default function Input({ value, onChange, label, required, type, disabled, maxLength, placeholder, icon, error }) {
    return (
        <Container>
            <Label disabled={disabled}>{label} {required  ? <TextRed disabled={disabled}>*</TextRed> : null}</Label>
            <Row>
                {icon ? <BoxIcon>{icon}</BoxIcon> : null}
                <DataInput value={value} onChange={onChange} type={type} placeholder={placeholder} disabled={disabled} maxLength={maxLength} icon={icon} error={error} />
            </Row>
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

const TextRed = styled.span`
    color: ${props => props.disabled === true ? Colors.redTransparent4 : Colors.red};
`

const Row = styled.div`
    ${MiddleCenterRow}
    width: 100%;
    box-sizing: border-box;
`

const BoxIcon = styled.div`
    ${MiddleCenterRow}
    position: absolute;
    width: 30px;
    height: 30px;
`

const DataInput = styled.input`
    width: 100%;
    font-size: 16px;
    padding: 4px 4px 4px ${props => props.icon ? 32 : 4}px;
    border: none;
    border-bottom: ${props => props.error ? 2 : 1}px solid ${props => props.disabled ? Colors.smoothGray : (props.error ? Colors.red : Colors.primary)};
    box-sizing: border-box;
    background-color: ${Colors.iceWhite};

    :focus{
        border-bottom: 2px solid ${Colors.primary};
    }
`
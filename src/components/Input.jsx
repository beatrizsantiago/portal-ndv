import React from 'react'
import styled from 'styled-components'

import Colors from '../themes/Colors'
import { MiddleCenterRow } from '../themes/StyleConstants'

export default function Input({ label, required, type, disabled, maxlenght, placeholder, icon, error }) {
    return (
        <Container>
            <Label>{label} {required ? <TextRed>*</TextRed> : null}</Label>
            <Row>
                {icon ? <BoxIcon>{icon}</BoxIcon> : null}
                <DataInput type={type} placeholder={placeholder} disabled={disabled} maxlenght={maxlenght} icon={icon} error={error} />
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
    color: ${Colors.primary};
    font-size: 16px;
    margin-bottom: 5px;
`

const TextRed = styled.span`
    color: ${Colors.red};
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

const DataInput = styled.input.attrs(props => ({
    type: props.type || 'text',
    placeholder: props.placeholder || '',
    maxlenght: props.maxlenght || 100,
    disabled: props.disabled,
}))`
    width: 100%;
    font-size: 16px;
    padding: 4px 1px 4px ${props => props.icon ? 32 : 1}px;
    border: none;
    border-bottom: ${props => props.error ? 2 : 1}px solid ${props => props.error ? Colors.red : Colors.primary};
    box-sizing: border-box;
    background-color: #fafafa;

    :focus{
        border-bottom: 2px solid ${Colors.primary};
    }
`
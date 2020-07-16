import React from 'react'
import styled from 'styled-components'

import Colors from '../themes/Colors'

export default function Select({ options = [], label, required, disabled, error, value, onChange }) {
    return (
        <Container>
            <Label>{label} {required ? <TextRed>*</TextRed> : null}</Label>
            <Dropdown disabled={disabled} error={error} value={value} onChange={onChange}>
                <option value="">Selecione...</option>
                {
                    options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))
                }
            </Dropdown>
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
    
    @media (max-width: 600px) {
        font-size: 14px;
    }
`

const TextRed = styled.span`
    color: ${Colors.red};
`

const Dropdown = styled.select`
    width: 100%;
    height: 29px;
    padding: 4px;
    border: none;
    border-bottom: ${props => props.error ? 2 : 1}px solid ${props => props.error ? Colors.red : Colors.primary};
    background-color: ${Colors.iceWhite};
    box-sizing: border-box;

    :focus{
        border-bottom: 2px solid ${Colors.primary};
    }
`
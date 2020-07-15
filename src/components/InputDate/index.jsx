import React from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import './stylesDatePicker.css'
import moment from 'moment'

import Colors from '../../themes/Colors'
import { MiddleCenterRow } from '../../themes/StyleConstants'

export default function InputDate({ selected, onChange, label, required, disabled, maxLength, icon, error, inline }) {

    const customDate = (date, currentDate) => {
        if (moment(date).format('DD/MM/YYYY') === moment(currentDate).format('DD/MM/YYYY')) {
            return 'select-day'
        }
    }

    return (
        <Container>
            <Label>{label} {required ? <TextRed>*</TextRed> : null}</Label>
            <Row>
                {icon ? <BoxIcon>{icon}</BoxIcon> : null}
                <DateInput
                    selected={selected}
                    onChange={onChange}
                    disabled={disabled}
                    maxLength={maxLength}
                    icon={icon}
                    error={error}
                    inline={inline}
                    minDate={new Date().setDate(new Date().getDate() - 30)}
                    maxDate={new Date()}
                    dayClassName={date => customDate(date, selected)}
                />
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
    margin-bottom: 10px;
    text-align: center;
    width: 100%;
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

const DateInput = styled(DatePicker).attrs({
    dateFormat: 'dd/MM/yyyy',
})`
    width: 240px;
    font-size: 16px;
    padding: 4px 4px 4px ${props => props.icon ? 32 : 4}px;
    border: none;
    border-bottom: ${props => props.error ? 2 : 1}px solid ${props => props.error ? Colors.red : Colors.primary};
    box-sizing: border-box;
    background-color: ${Colors.iceWhite};

    :focus{
        border-bottom: 2px solid ${Colors.primary};
    }
`
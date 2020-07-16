import React from 'react'
import styled from 'styled-components'

import { MiddleCenterRow, MiddleCenterColumn } from '../themes/StyleConstants'

export default function RowInputs({ inputs = [] }) {

    const getWidth = () => {
        let division = 100 / inputs.length
        return division
    }

    return (
        <Row>
            {
                inputs.map((child, index) => (
                    <Box key={index} index={index} width={getWidth()}>
                        {child}
                    </Box>
                ))
            }
        </Row>
    )
}

const Row = styled.div`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 100%;

    @media (max-width: 900px) {
        flex-wrap: wrap;
    }
`

const Box = styled.div`
    ${MiddleCenterColumn}
    width: ${props => props.width}%;
    box-sizing: border-box;
    margin-left: ${props => props.index > 0 ? 8 : 0}px;

    @media (max-width: 900px) {
        width: 100%;
        margin-left: 0px;
    }
`
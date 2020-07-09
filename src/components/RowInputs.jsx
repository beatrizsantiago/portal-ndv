import React from 'react'
import styled from 'styled-components'

import { MiddleCenterRow } from '../themes/StyleConstants'

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
`

const Box = styled.div`
    width: ${props => props.width}%;
    box-sizing: border-box;
    margin-left: ${props => props.index > 0 ? 8 : 0}px;
`
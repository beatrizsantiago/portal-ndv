import React from 'react'
import styled from 'styled-components'
import ReactLoading from 'react-loading'

import Colors from '../themes/Colors'
import { CenterRow } from '../themes/StyleConstants'

export default function Loading() {
    return (
        <Container>
            <ReactLoading type="spinningBubbles" color={Colors.primary} height={70} width={70} />
        </Container>
    )
}

const Container = styled.div`
    ${CenterRow}
    width: 100%;
    height: 300px;

    @media (max-width: 750px) {
        height: 200px;
    }
`
import React from 'react'
import styled from 'styled-components'

import Colors from '../themes/Colors'
import { MiddleCenterRow, MiddleCenterColumn } from '../themes/StyleConstants'

export default function Table({ colunsSize = [], alignColuns = [], namesColumns = [], datas = [] }) {

    const renderCells = data => {
        let keys = Object.keys(data)
        return keys.map((key, index) => (
            <Cell key={index} size={colunsSize[index]} align={alignColuns[index]}>{data[key]}</Cell>
        ))
    }

    return (
        <Container>
            <Header>
                <LineHeader>
                    {namesColumns.map((name, index) => <Cell key={index} size={colunsSize[index]} align={alignColuns[index]}>{name}</Cell>)}
                </LineHeader>
            </Header>

            <Body>
                {
                    datas.map((data, index) => (
                        <Row key={index} index={index}>
                            {
                                renderCells(data)
                            }
                        </Row>
                    ))
                }
            </Body>
        </Container>
    )
}

const Container = styled.table`
    width: 100%;
    margin: 20px 0px;
    padding: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: ${Colors.white};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
`

const Header = styled.thead`
    ${MiddleCenterRow}
    width: 100%;
    height: 32px;
    margin-bottom: 5px;
    padding: 5px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    box-sizing: border-box;
    background-color: ${Colors.smoothGray};
`

const LineHeader = styled.tr`
    ${MiddleCenterRow}
    width: 100%;
`

const Body = styled.tbody`
    ${MiddleCenterColumn}
    width: 100%;
    box-sizing: border-box;
`

const Row = styled.tr`
    ${MiddleCenterRow}
    width: 100%;
    padding: 5px;
    border-top-width: ${props => props.index === 0 ? 0 : 1}px;
    border-top-color: ${Colors.smoothGray};
    border-top-style: solid;
    box-sizing: border-box;
`

const Cell = styled.td`
    ${MiddleCenterRow}
    justify-content: ${props => props.align};
    width: ${props => props.size === 'small' ? 20 : (props.size === 'medium' ? 60 : 100)}%;
    padding-right: 5px;
    box-sizing: border-box;
`
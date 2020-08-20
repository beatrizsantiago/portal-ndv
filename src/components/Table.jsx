import React from 'react'
import styled from 'styled-components'

import Colors from '../themes/Colors'
import { MiddleCenterRow, MiddleCenterColumn } from '../themes/StyleConstants'

export default function Table({ colunsSize = [], alignColuns = [], namesColumns = [], datas = [], buttons, sizeCellButton }) {

    const renderCells = data => {
        let keys = Object.keys(data)
        return keys.map((key, index) =>
            key !== 'id' && key !== 'legend' ? (
                <Cell key={index} size={colunsSize[index]} align={alignColuns[index]}>{data[key]}</Cell>
            ) : null
        )
    }

    return (
        <Container>
            <Header>
                <LineHeader>
                    {namesColumns.map((name, index) => <Cell key={index} size={colunsSize[index]} align={alignColuns[index]}>{name}</Cell>)}
                    {buttons !== undefined ? <Cell size={sizeCellButton} align="center" /> : null}
                </LineHeader>
            </Header>

            <Body>
                {
                    datas.map((data, index) => (
                        <Row key={index} index={index} legend={data.legend}>
                            {
                                renderCells(data)
                            }
                            {buttons !== undefined ? <Cell key={index} size={sizeCellButton} align="center">{buttons(data)}</Cell> : null}
                        </Row>
                    ))
                }
            </Body>
        </Container>
    )
}

const Container = styled.table`
    width: 100%;
    margin: 10px 0px;
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
    border-radius: 4px;
    box-sizing: border-box;
    background-color: ${Colors.smoothGray};
`

const LineHeader = styled.tr`
    ${MiddleCenterRow}
    width: 100%;
    font-weight: bold;
    font-size: 16px;

    @media (max-width: 700px) {
        font-size: 14px;
    }
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
    font-size: 16px;
    border-top-width: ${props => props.index === 0 ? 0 : 1}px;
    border-top-color: ${Colors.smoothGray};
    border-top-style: solid;
    box-sizing: border-box;
    background-color: ${props => props.legend === 3 ? Colors.redTransparent1 : (props.legend === 2 ? Colors.yellowTransparent1 : (props.legend === 1 ? Colors.greenTransparent1 : Colors.white))};

    @media (max-width: 700px) {
        font-size: 14px;
    }
`

const Cell = styled.td`
    ${MiddleCenterRow}
    justify-content: ${props => props.align};
    width: ${props => props.size === 'small' ? 20 : (props.size === 'middleSmall' ? 30 : (props.size === 'medium' ? 60 : 100))}%;
    padding-right: 5px;
    box-sizing: border-box;

    @media (max-width: 1000px) {
        width: ${props => props.size === 'small' || props.size === 'middleSmall' ? 25 : (props.size === 'medium' ? 50 : 100)}%;
    }

    @media (max-width: 420px) {
        width: ${props => props.size === 'small' ? 30 : (props.size === 'medium' ? 40 : 100)}%;
    }
`
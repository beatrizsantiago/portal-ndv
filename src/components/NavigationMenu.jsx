import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Colors from '../themes/Colors'
import { CenterRow, MiddleCenterRow } from '../themes/StyleConstants'

export default function NavigationMenu({ items }) {
    return (
        <Menu quantity={items.length}>
            {
                items.map((item, index) => (
                    <Box key={index} to={item.link}>
                        <Icon>{item.icon}</Icon>
                        <Title>{item.title}</Title>
                    </Box>
                ))
            }
        </Menu>
    )
}

const Menu = styled.div`
    ${MiddleCenterRow}
    justify-content: ${props => props.quantity > 2 ? 'space-between' : 'space-around'};
    width: 100%;
    margin: 15px 0px;
    box-sizing: border-box;

    @media (max-width: 895px) {
        flex-wrap: wrap;
        justify-content: space-around;
    }
`

const Icon = styled.div`
    ${CenterRow}
    width: 25%;
    height: 70%;
    text-align: center;
    color: ${Colors.red};
    border-right-style: solid;
    border-right-width: 2px;
    border-right-color: ${Colors.smoothGray};
    transition: color 300ms linear;
`

const Title = styled.h1`
    font-size: 18px;
    font-weight: bold;
    color: ${Colors.primary};
    width: 70%;
    padding: 10px;
    transition: color 300ms linear;
`

const Box = styled(Link)`
    ${MiddleCenterRow}
    justify-content: space-between;
    position: relative;
    width: 32.5%;
    min-width: 280px;
    height: 60px;
    margin: 5px 10px;
    border-radius: 4px;
    border-left-style: solid;
    border-left-width: 4px;
    border-left-color: ${Colors.red};
    box-sizing: border-box;
    background-color: ${Colors.white};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    transform: translateZ(0);
    
    &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: -1;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        background: ${Colors.primary};
        transform: scaleX(0);
        transition-property: transform;
        transform-origin: 0% 50%;
        transition: 300ms linear;
    }
    &:hover:before {
        transform: scaleX(1);
    }
    &:hover ${Icon} {
        color: ${Colors.white};
    }
    &:hover ${Title} {
        color: ${Colors.white};
    }
`

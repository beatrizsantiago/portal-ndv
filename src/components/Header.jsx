import React from 'react'
import styled from 'styled-components'

import Colors from '../themes/Colors'
import { CenterRow, MiddleCenterColumn } from '../themes/StyleConstants'

import LogoImage from '../assets/icons/logo.png'

export default function Header() {
    return (
        <NavBar>
            <Tab>
                <Item>Integração</Item>
                <Item>Casa de Paz</Item>
                <Spacing />
                <Item>Eventos</Item>
                <Item>Classes</Item>
            </Tab>
            <Circle>
                <Logo />
            </Circle>
        </NavBar>
    )
}

const NavBar = styled.nav`
    ${MiddleCenterColumn}
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 112px;
    box-sizing: border-box;
`

const Tab = styled.div`
    ${CenterRow}
    width: inherit;
    height: 75px;
    background-color: ${Colors.primary};
    clip-path: polygon(0 0, 100% 0%, 100% 50%, 50% 100%, 0 50%);
`

const Item = styled.h2`
    font-size: 12px;
    color: ${Colors.white};
    text-align: center;
    font-weight: normal;
    letter-spacing: 0.4px;
    cursor: pointer;
    margin: 4px;
    width: 100px;
`

const Spacing = styled.span`
    width: 100px;
`

const Circle = styled.div`
    ${CenterRow}
    position: absolute;
    width: 90px;
    height: 90px;
    bottom: 0px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: ${Colors.white};
`

const Logo = styled.img.attrs({ src: LogoImage })`
    width: 84px;
    height: 84px;
`
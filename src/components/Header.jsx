import React from 'react'
import styled from 'styled-components'

import Colors from '../themes/Colors'
import { MiddleCenterColumn } from '../themes/StyleConstants'

export default function Header() {
    return (
        <NavBar>
            <Tab>

            </Tab>
            <Circle />
        </NavBar>
    )
}

const NavBar = styled.nav`
    ${MiddleCenterColumn}
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 120px;
    box-sizing: border-box;
`

const Tab = styled.div`
    width: inherit;
    height: 80px;
    background-color: ${Colors.primary};
    clip-path: polygon(0 0, 100% 0%, 100% 60%, 50% 100%, 0 60%);
`

const Circle = styled.div`
    position: absolute;
    width: 90px;
    height: 90px;
    bottom: 0px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: ${Colors.white};
`
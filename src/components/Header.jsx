import React from 'react'
import styled from 'styled-components'

import Colors from '../themes/Colors'

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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 120px;
    border: solid 1px red;
    box-sizing: border-box;
`

const Tab = styled.div`
    width: inherit;
    height: 80px;
    background-color: ${Colors.primary};
    clip-path: polygon(0 0, 100% 0%, 100% 40%, 50% 100%, 0 40%);
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
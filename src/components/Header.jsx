import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import { setCurrentNavigation } from '../redux/navigation/navigation.actions'

import Colors from '../themes/Colors'
import { CenterRow, MiddleCenterColumn } from '../themes/StyleConstants'

import LogoImage from '../assets/icons/logo.png'

function Header({ currentNavigation, setCurrentNavigation }) {

    useEffect(() => {
        let query = window.location.href.split('/')
        let currentRoute = query[3]

        let mainRoutes = ['home', 'integration']

        let findRoute = mainRoutes.includes(currentRoute)

        if (findRoute) {
            setCurrentNavigation(currentRoute)
        }
    }, [setCurrentNavigation])

    let navigate = useNavigate()

    const handlePress = param => {
        setCurrentNavigation(param)
        navigate(`/${param}`)
    }

    const getType = route => {
        if (route === currentNavigation) {
            return 1
        } else {
            return 0
        }
    }

    return (
        <NavBar>
            <Tab>
                {
                    currentNavigation !== 'home' ?
                        <>
                            <Item onClick={() => handlePress('integration')} type={getType('integration')}>Integração</Item>
                            <Item onClick={() => handlePress('integration')}>Casa de Paz</Item>
                            <Spacing />
                            <Item onClick={() => handlePress('integration')}>Eventos</Item>
                            <Item onClick={() => handlePress('integration')}>Classes</Item>
                        </> : null
                }
            </Tab>
            <Circle onClick={() => handlePress('home')}>
                <Logo />
            </Circle>
        </NavBar>
    )
}

const mapStateToProps = state => ({
    currentNavigation: state.navigation.currentNavigation
})

const mapDispatchToProps = dispatch => ({
    setCurrentNavigation: navigation => dispatch(setCurrentNavigation(navigation))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

const NavBar = styled.nav`
    ${MiddleCenterColumn}
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 112px;
    box-sizing: border-box;

    @media (max-width: 750px) {
        height: 80px;
    }
`

const Tab = styled.div`
    ${CenterRow}
    width: inherit;
    height: 75px;
    background-color: ${Colors.primary};
    clip-path: polygon(0 0, 100% 0%, 100% 50%, 50% 100%, 0 50%);

    @media (max-width: 750px) {
        height: 50px;
    }
`

const Item = styled.button`
    font-size: 12px;
    color: ${props => props.type === 1 ? Colors.secondary : Colors.white};
    text-align: center;
    font-weight: normal;
    letter-spacing: 0.4px;
    margin: 4px;
    width: 100px;
    cursor: pointer;
    background-color: transparent;
    border: none;

    @media (max-width: 750px) {
        display: none;
    }
`

const Spacing = styled.span`
    width: 100px;
`

const Circle = styled.button`
    ${CenterRow}
    position: absolute;
    width: 90px;
    height: 90px;
    bottom: 0px;
    cursor: pointer;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: ${Colors.white};
    border: none;

    @media (max-width: 750px) {
        width: 70px;
        height: 70px;
    }
`

const Logo = styled.img.attrs({ src: LogoImage })`
    width: 84px;
    height: 84px;

    @media (max-width: 750px) {
        width: 64px;
        height: 64px;
    }
`
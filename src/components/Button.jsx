import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'

import Colors from '../themes/Colors'
import { CenterRow } from '../themes/StyleConstants'

export default function Button({ onClick, title, width, height, color, disabled, outlined, type, to, loading }) {

    if (type === 'link') {
        return (
            <ContainerLink width={width} height={height} color={color} outlined={outlined.toString()} to={to}>
                <Text outlined={outlined}>{title}</Text>
            </ContainerLink>
        )

    } else {
        return (
            <Container onClick={onClick} width={width} height={height} color={color} disabled={disabled} outlined={outlined}>
                {loading ? <ReactLoading type="spinningBubbles" color={Colors.white} height={15} width={15} /> : null}
                <Text outlined={outlined} loading={loading}>{title}</Text>
            </Container>
        )
    }
}

const PropsButton = css`
    ${CenterRow}
    width: ${props => props.width || 120}px;
    height: ${props => props.height || 35}px;
    padding: 4px;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 5px;
    border: solid ${props => props.outlined ? 1 : 0}px ${props => props.color || Colors.primary};
    background-color: ${props => props.outlined ? Colors.white : (props.color ? props.color : Colors.primary)};
`

const Container = styled.button`
    ${PropsButton}
`

const ContainerLink = styled(Link)`
    ${PropsButton}
`

const Text = styled.h1`
    color: ${props => props.outlined ? Colors.primary : ( props.color ? props.color : Colors.white)};
    font-size: 15px;
    font-weight: normal;
    ${props => props.loading ? 'margin-left: 5px;' : null}
`
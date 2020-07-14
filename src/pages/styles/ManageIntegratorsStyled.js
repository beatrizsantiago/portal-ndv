import styled from 'styled-components'

import Colors from '../../themes/Colors'
import { CenterRow } from '../../themes/StyleConstants'

import ImageAdd from '../../assets/icons/icon_add_integrator.png'

export const CardAdd = styled.button`
    ${CenterRow}
    width: 32%;
    min-width: 300px;
    height: 180px;
    margin: 0px 10px 20px 10px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    background-color: ${Colors.white};
    box-sizing: border-box;
`

export const IconAdd = styled.img.attrs({ src: ImageAdd })`
    width: 130px;
    height: 130px;
`

export const Title = styled.h1`
    font-size: 20px;
    margin-left: 20px;
`
import styled from 'styled-components'
import { MdModeEdit } from 'react-icons/md'

import Colors from '../../themes/Colors'
import { CenterRow, MiddleCenterColumn } from '../../themes/StyleConstants'

export const Circle = styled.div`
    ${CenterRow}
    position: absolute;
    top: -110px;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background-color: ${Colors.primary};
    box-sizing: border-box;
`

export const ImageProfile = styled.img.attrs({ src: 'https://gartic.com.br/imgs/mural/j_/j_paulo/e-leviosa-nao-leviosa.png' })`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`

export const ButtonCircle = styled.button`
    ${CenterRow}
    position: absolute;
    top: 155px;
    left: 168px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: ${Colors.white};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
`

export const IconPen = styled(MdModeEdit)`
    color: ${Colors.primary};
    font-size: 26px;
    padding: 0px;
    margin: 0px;
`

export const Box = styled.div`
    ${MiddleCenterColumn}
    position: relative;
    width: 60%;
    padding: 130px 20px 20px 20px;
    margin-top: 130px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: ${Colors.white};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
`
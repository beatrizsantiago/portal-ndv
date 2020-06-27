import styled, { css } from 'styled-components'

import Colors from '../../themes/Colors'
import { CenterColumn } from '../../themes/StyleConstants'

import background from '../../assets/img/bg-church.jpg'
import LoginIcon from '../../assets/icons/login.png'

export const Container = styled.section`
    ${CenterColumn}
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-position: bottom;
    background-size: cover;
    opacity: 0.8;
`

export const Box = styled.div`
    ${CenterColumn}
    position: relative;
    width: 280px;
    height: 280px;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
    background-color: ${Colors.white};
`

export const HeaderBox = styled.div`
    ${CenterColumn}
    position: absolute;
    top: -50px;
    width: 260px;
    height: 100px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
    background-color: ${Colors.primary};
`

export const Label = styled.h2`
    font-size: 15px;
    color: ${Colors.primary};
    width: 90%;
    font-weight: 500;
`

const PropertiesInput = css`
    width: 90%;
    height: 25px;
    padding: 5px 5px 5px 30px;
    font-size: 15px;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom-color: ${Colors.primary};
    border-bottom-width: 1px;
    outline: none;
    box-sizing: border-box;
    transition: all .3s ease-out;
    :focus{
        border-bottom: 2px solid ${Colors.secondary};
    }
`

export const InputEmail = styled.input.attrs({ type: 'email', placeholder: 'usuario@novidadedevida.com' })`
    ${PropertiesInput};
`

export const InputPassword = styled.input.attrs({ type: 'password', placeholder: '**********' })`
    ${PropertiesInput};
`

export const ImageLogin = styled.img.attrs({ src: LoginIcon })`
    width: 80%;
`

export const Button = styled.button.attrs({ type: 'submit' })`
    width: 110px;
    height: 40px;
    margin-top: 38px;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    color: ${Colors.white};
    background-color: ${Colors.primary};
`

const PropertiesIcon = css `
    position: absolute;
    left: 34px;
    width: 25px;
    font-size: 25px;
    text-align: center;
    line-height: 0px;
    color: ${Colors.secondary};
`

export const IconMail = styled.h2`
    ${PropertiesIcon}
    top: 94px;
`

export const IconPassword = styled.h2`
    ${PropertiesIcon}
    top: 158px;
`

export const Spacing = styled.div`
    height: 40px;
`
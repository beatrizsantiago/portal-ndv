import styled, { css } from 'styled-components'

import Colors from '../../themes/Colors'
import { MiddleCenterRow } from '../../themes/StyleConstants'

import IconIntegration from '../../assets/icons/icon_integracao.png'
import IconCap from '../../assets/icons/icon_cap.png'
import IconProfile from '../../assets/icons/icon_woman_profile.png'
import IconEvent from '../../assets/icons/icon_events.png'
import IconClass from '../../assets/icons/icon_class.png'

const PropsIcon = css`
    width: 100px;
    transition: all 0.5s;
`

export const ImageIntegration = styled.img.attrs({ src: IconIntegration })`
    ${PropsIcon}
    height: 102px;
`

export const ImageCap = styled.img.attrs({ src: IconCap })`
    ${PropsIcon}
    height: 102px;
`

export const ImageProfile = styled.img.attrs({ src: IconProfile })`
    ${PropsIcon}
    height: 102px;
`

export const ImageEvent = styled.img.attrs({ src: IconEvent })`
    ${PropsIcon}
    height: 102px;
`

export const ImageClass = styled.img.attrs({ src: IconClass })`
    ${PropsIcon}
    height: 102px;
`

export const Label = styled.h1`
    font-size: 20px;
    color: ${Colors.primary};
    transition: all 0.5s;
    margin-left: 20px;
    flex: 1;
`

export const Card = styled.button`
    ${MiddleCenterRow}
    width: 300px;
    min-width: 280px;
    height: 120px;
    margin: 15px;
    padding: 10px;
    cursor: pointer;
    border: none;
    box-sizing: border-box;
    border-left-color: ${Colors.secondary};
    border-left-style: solid;
    border-left-width: 5px;
    background-color: ${Colors.white};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: all 0.5s;

    &:hover {
        transform: scale(1.2);
        margin: 15px 40px;
    }
    &:hover ${ImageIntegration} {
        transform: scale(1.5);
    }
    &:hover ${ImageCap} {
        transform: scale(1.5);
    }
    &:hover ${ImageProfile} {
        transform: scale(1.5);
    }
    &:hover ${ImageEvent} {
        transform: scale(1.5);
    }
    &:hover ${ImageClass} {
        transform: scale(1.5);
    }
    &:hover ${Label} {
        margin-left: 40px;
    }
`
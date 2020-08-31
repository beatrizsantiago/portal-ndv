import styled from 'styled-components'

import { MiddleCenterRow, CenterRow, MiddleCenterColumn } from '../../themes/StyleConstants'
import Colors from '../../themes/Colors'

export const ImageBanner = styled.div`
    width: 100%;
    height: 250px;
    background-size: cover;
    background-position: center;
    background-image: url('${props => props.source}');
`

export const BodyModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
`

export const Title = styled.h1`
    color: ${Colors.primary};
    font-size: 20px;
    width: 100%;
    text-align: center;
    margin-bottom: 5px;
`

export const Description = styled.h3`
    color: ${Colors.primary};
    font-size: 13px;
    width: 100%;
    text-align: justify;
    font-weight: normal;
`

export const Row = styled.div`
    ${MiddleCenterRow}
    margin-top: 5px;
    ${props => props.type === 1 ? 'width: 50%;' : ''}

    @media (max-width: 900px) {
        ${props => props.type === 1 ? 'width: 100%;' : ''}
    }
`

export const RowWrap = styled.div`
    ${CenterRow}
    flex-wrap: wrap;
`

export const Label = styled.h2`
    color: ${Colors.primary};
    font-size: 16px;
    margin-right: 6px;
`

export const Text = styled.h2`
    color: ${Colors.primary};
    font-size: 16px;
    font-weight: normal;
`

export const Subtitle = styled.h2`
    color: ${Colors.primary};
    font-size: 18px;
    width: 100%;
    text-align: center;
    margin-top: 15px;
`

export const Column = styled.div`
    ${MiddleCenterColumn}
    width: 49%;
    margin-top: 8px;
    ${props => props.index % 2 !== 0 ? `border-left: solid 2px ${Colors.lightGray};` : ''}
    box-sizing: border-box;

    @media (max-width: 900px) {
        width: 100%;
        border-left: none;
    }
`

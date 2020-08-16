import styled from 'styled-components'
import { CenterColumn, MiddleCenterRow } from '../../themes/StyleConstants'

import Colors from '../../themes/Colors'

export const Container = styled.section`
    position: relative;
    width: 100%;
    background-color: ${Colors.backgroundGray};
`

export const Section = styled.section`
    ${CenterColumn}
    width: 100%;
    padding: 0px 10px;
    box-sizing: border-box;
`

export const SectionWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    ${props => props.type === 1 ? 'max-width: 1100px;' : ''}
    margin-top: 10px;
    padding: 10px;
    box-sizing: border-box;
`

export const TitleModal = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 20px;

    @media (max-width: 900px) {
        font-size: 18px;
        width: 80%;
    }
`

export const LargeBox = styled.div`
    ${MiddleCenterRow}
    justify-content: ${props => props.type === 'buttons' ? 'space-between' : 'space-around'};
    flex-wrap: wrap;
    width: 100%;
    margin-top: 10px;
    padding: ${props => props.type === 'buttons' ? 10 : 5}px;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: ${Colors.white};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

    ${props => props.type === 'buttons' ? '@media (max-width: 600px) {flex-direction: column; align-items: center;}' : ''}
`
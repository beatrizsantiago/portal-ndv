import styled from 'styled-components'
import { AiOutlineFileSync } from 'react-icons/ai' //AiOutlineUser
import { FiUserX, FiList } from 'react-icons/fi'

import { CenterRow, MiddleCenterRow } from '../../themes/StyleConstants'

import Colors from '../../themes/Colors'

export const BoxLegends = styled.div`
    ${MiddleCenterRow}
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 10px;
    padding: 5px;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: ${Colors.white};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
`

export const LegendBox = styled.div`
    ${CenterRow}
    width: 165px;
    height: 30px;
    padding: 0px 8px;
    margin: 5px;
`

export const LegendColor = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${props => props.type === 3 ? Colors.redTransparent1 : (props.type === 2 ? Colors.yellowTransparent1 : (props.type === 1 ? Colors.greenTransparent1 : Colors.white))};
    margin-right: 10px;
    border: solid 1px ${Colors.smoothGray};
    border-radius: 4px;
`

export const Legend = styled.h2`
    font-size: 15px;
    font-weight: bold;
    color: ${Colors.primary};
`

export const RowButtons = styled.div`
    ${MiddleCenterRow}
    width: 100%;
    justify-content: space-around;
` 

export const OutlineFileSync = styled(AiOutlineFileSync)`
    color: ${Colors.green};
    font-size: 24px;
    margin-top: 4px;
`

export const LostUser = styled(FiUserX)`
    color: ${Colors.red};
    font-size: 24px;
    margin-top: 4px;
`

export const ListDetails = styled(FiList)`
    color: ${Colors.blue};
    font-size: 24px;
    margin-top: 4px;
`

export const Textarea = styled.textarea.attrs({ placeholder: 'Digite aqui...' })`
    width: 100%;
    height: 180px;
    margin: 10px 0px;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    box-sizing: border-box;
    border: solid 1px ${Colors.lightGray};
`
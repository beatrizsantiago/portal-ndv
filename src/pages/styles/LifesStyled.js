import styled from 'styled-components'
import { AiOutlineFileSync } from 'react-icons/ai' //AiOutlineUser
import { FiUserX, FiList } from 'react-icons/fi'

import { MiddleCenterRow } from '../../themes/StyleConstants'

import Colors from '../../themes/Colors'

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
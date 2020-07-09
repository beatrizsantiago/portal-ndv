import styled from 'styled-components'
import { CenterColumn } from '../../themes/StyleConstants'

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
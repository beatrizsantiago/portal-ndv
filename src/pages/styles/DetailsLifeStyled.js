import styled, { css } from 'styled-components'
import { GiSwirlString } from "react-icons/gi"
import { FaStar, FaHandshake, FaPray, FaPrayingHands, FaBible, FaHome, FaEdit } from "react-icons/fa"

import { CenterColumn, MiddleCenterRow, MiddleCenterColumn } from '../../themes/StyleConstants'
import Colors from '../../themes/Colors'

const PropertiesBox = css`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: ${Colors.white};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
`

export const BoxColumn = styled.div`
    ${MiddleCenterColumn}
    width: 60%;
    min-width: 320px;
    padding-right: 10px;
    box-sizing: border-box;
`

export const InfoProfile = styled.div`
    ${PropertiesBox}
    position: relative;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

export const Row = styled.div`
    ${MiddleCenterRow}
    margin-top: 10px;
    width: 100%;
`

const PropertiesText = css`
    color: ${Colors.primary};
    font-size: 16px;
    font-weight: normal;
`

export const Name = styled.h1`
    color: ${Colors.primary};
    font-size: 22px;
    text-align: center;
`

export const BigLabel = styled.h2`
    ${PropertiesText}
    width: 65%;
`

export const SmallLabel = styled.h2`
    ${PropertiesText}
    width: 35%;
`

export const Bold = styled.strong``

export const Title = styled.h1`
    width: 80%;
    color: ${Colors.primary};
    font-size: 22px;
    text-align: center;
    margin-bottom: 15px;
    border-bottom: solid 1px ${Colors.smoothGray};
`

export const Feedbacks = styled.div`
    ${PropertiesBox}
    ${MiddleCenterColumn}
    flex: 1;
    width: 100%;
    margin-top: 10px;
`

export const ListFeedback = styled.div`
    ${MiddleCenterColumn}
    flex: 1;
    width: 100%;
    max-height: 500px;
    overflow: auto;
`

export const Item = styled.div`
    ${MiddleCenterColumn}
    width: 98%;
    padding: 8px;
    margin-bottom: 8px;
    border-left: solid 4px ${Colors.lightGray};
    box-sizing: border-box;
`

export const Feedback = styled.h2`
    ${PropertiesText}
    width: 100%;
`

export const NameIntegrator = styled.h2`
    ${PropertiesText}
    width: 100%;
    font-size: 14px;
    text-align: right;
    margin-top: 5px;
`

export const Timeline = styled.div`
    ${PropertiesBox}
    ${MiddleCenterColumn}
    flex: 1;
    width: 40%;
    min-width: 420px;
`

export const ColumnWidth = styled.div`
    ${MiddleCenterColumn}
    position: relative;
    flex: 1;
    width: 420px;
`

export const Line = styled.div`
    position: absolute;
    width: 4px;
    height: 100%;
    border-radius: 3px;
    background-color: ${Colors.primary};
    z-index: 1;
`

export const StepBox = styled.div`
    ${MiddleCenterRow}
    ${props => props.index % 2 === 0 ? null : 'flex-direction: row-reverse;' };
    justify-content: flex-end;
    width: 100%;
    height: 90px;
`

export const Circle = styled.button`
    ${CenterColumn}
    width: 56px;
    height: 56px;
    border-radius: 40px;
    border: none;
    cursor: pointer;
    background-color: ${props => props.stepDone === null ? Colors.lightGray : Colors.primary};
    z-index: 2;
`

export const Triangle = styled.div`
    width: 18px;
    height: 30px;
    margin: 10px;
    background-color: ${props => props.stepDone === null ? Colors.white : Colors.primary};
    clip-path: ${props => props.index % 2 === 0 ? 'polygon(100% 0, 0 50%, 100% 100%)' : 'polygon(0 0, 100% 50%, 0 100%)' };
`

export const Box = styled.div`
    ${CenterColumn}
    width: 144px;
    height: 90px;
    padding: 5px;
    border-radius: 8px;
    background-color: ${Colors.white};
    border: solid 4px ${Colors.primary};
    box-sizing: border-box;
`

export const SpacingBox = styled.div`
    width: 144px;
`

const PropsTextBox = css`
    color: ${Colors.primary};
    text-align: center;
    padding: 2px 0px;
`

export const DateStep = styled.h2`
    ${PropsTextBox}
    width: 90%;
    font-size: 18px;
    font-weight: bold;
    border-bottom: solid 1px ${Colors.smoothGray};
`

export const Body = styled.h2`
    ${PropsTextBox}
    font-size: 16px;
    font-weight: 500;
`

const PropsIcon = css`
    color: ${Colors.white};
    font-size: 30px;
    margin: 0px;
    padding: 0px;
`

export const IconVisitor = styled(FaStar)`
    ${PropsIcon}
`

export const IconWelcome = styled(FaHandshake)`
    ${PropsIcon}
`

export const IconBaptism = styled(GiSwirlString)`
    ${PropsIcon}
`

export const IconExperience = styled(FaPray)`
    ${PropsIcon}
`

export const IconActivation = styled(FaPrayingHands)`
    ${PropsIcon}
`

export const IconClass = styled(FaBible)`
    ${PropsIcon}
`

export const IconCap = styled(FaHome)`
    ${PropsIcon}
`

export const ButtonEdit = styled.button`
    position: absolute;
    top: 3px;
    right: 0px;
    cursor: pointer;
    border: none;
    background-color: transparent;
`

export const IconEdit = styled(FaEdit)`
    color: ${Colors.secondary};
    font-size: 22px;
    margin: 0px;
    padding: 0px;
`

export const BoxDate = styled.div`
    width: 100%;
    height: 330px;
    margin-top: 10px;
`

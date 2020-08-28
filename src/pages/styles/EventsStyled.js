import styled from 'styled-components'
import { IoIosList, IoMdCalendar, IoMdClose } from 'react-icons/io'
import { FaRegCalendarAlt } from 'react-icons/fa'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

import Colors from '../../themes/Colors'
import { CenterRow } from '../../themes/StyleConstants'

const localizer = momentLocalizer(moment)

export const UpdateSchedule = styled(FaRegCalendarAlt)`
    font-size: 30px;
`

export const ListEvent = styled(IoIosList)`
    font-size: 38px;
`

export const AddEvent = styled(IoMdCalendar)`
    font-size: 38px;
`

export const CalendarEvent = styled(Calendar).attrs({
    startAccessor: 'start',
    endAccessor: 'end',
    localizer: localizer,
    views: ['month'],
    eventPropGetter: () => ({ style: { backgroundColor: Colors.secondary } }),
    dayPropGetter: date => ({ style: { backgroundColor: moment(date).format('DD/MM/YYYY') === moment(new Date()).format('DD/MM/YYYY') ? Colors.redTransparent1 : Colors.white } }),
})`
    width: 100%;
    height: 78vh;
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: ${Colors.white};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    z-index: 0;

    @media (max-width: 600px) {
        height: 420px;
    }
`

export const Title = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: ${Colors.primary};
    margin: 16px 0px 10px 0px;
`

export const Row = styled.div`
    ${CenterRow}
    width: 100%;
`

export const SmallRow = styled.div`
    ${CenterRow}
    width: 85%;
`

export const RemoveDay = styled.button`
    ${CenterRow}
    width: 15%;
    margin-top: 16px;
    border: none;
    background-color: transparent;
`

export const RemoveIcon = styled(IoMdClose)`
    font-size: 26px;
    color: ${Colors.red};
`

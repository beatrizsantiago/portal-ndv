import styled from 'styled-components'
import { IoIosList, IoMdCalendar } from 'react-icons/io'
import { FaRegCalendarAlt } from 'react-icons/fa'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

import Colors from '../../themes/Colors'

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
`
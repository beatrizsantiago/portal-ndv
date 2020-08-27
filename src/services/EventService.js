
export async function RegisterNewEvent(title, organizer, typeTicket, valueTicket, daysEvent, description) {
    try {
        console.log(title, organizer, typeTicket, valueTicket, daysEvent, description);
        return true

    } catch (error) {
        console.log("Error RegisterNewEvent: ", error);
        throw error
    }
}

export async function ScheduleUpdate(title, dateSchedule, initHour, endHour, frequencyWeek) {
    try {
        console.log(title, dateSchedule, initHour, endHour, frequencyWeek);
        return true

    } catch (error) {
        console.log("Error RegisterNewEvent: ", error);
        throw error
    }
}

export async function ListEvents() {
    try {
        let data = [
            {
                id: 0,
                title: 'All Day Event very long title',
                allDay: true,
                start: new Date(2020, 7, 1),
                end: new Date(2020, 7, 1),
            },
            {
                id: 1,
                title: 'Long Event',
                start: new Date(2020, 7, 7),
                end: new Date(2020, 7, 10),
            },
        ]

        return data

    } catch (error) {
        console.log("Error ListEvents: ", error);
        throw error
    }
}

export default { ListEvents, RegisterNewEvent, ScheduleUpdate }
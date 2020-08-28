
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

export async function ListEventsSchedule() {
    try {
        let data = [
            {
                id: 0,
                title: 'All Day Event very long title',
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
        console.log("Error ListEventsMonth: ", error);
        throw error
    }
}

export async function ListEventsMonth() {
    try {
        let data = [
            {
                id: 0,
                banner: 'https://http2.mlstatic.com/painel-banner-festa-decoraco-moana-disney-baby-15x1-D_NQ_NP_925669-MLB29103150297_012019-F.jpg',
                title: 'All Day Event very long title',
                organizer: '',
                typeTicket: 0,
            },
            {
                id: 1,
                banner: 'https://http2.mlstatic.com/painel-banner-decoraco-frozen-200-x150-D_NQ_NP_981396-MLB40516247954_012020-F.jpg',
                title: 'Long Event',
                organizer: 'Annabeth Chase',
                typeTicket: 0,
            },
        ]

        return data

    } catch (error) {
        console.log("Error ListEventsMonth: ", error);
        throw error
    }
}

export async function DetailsEvent(id) {
    try {
        let data = [
            
        ]

        return data

    } catch (error) {
        console.log("Error DetailsEvent: ", error);
        throw error
    }
}

export async function CancelEvent(id) {
    try {
        console.log(id);
        return true

    } catch (error) {
        console.log("Error CancelEvent: ", error);
        throw error
    }
}

export default { RegisterNewEvent, ScheduleUpdate, ListEventsSchedule, ListEventsMonth, DetailsEvent, CancelEvent }
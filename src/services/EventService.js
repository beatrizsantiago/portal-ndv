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

export default { ListEvents }
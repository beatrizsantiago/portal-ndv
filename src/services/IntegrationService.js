export async function RegisterNewVisitant(fullName, phone, otherChurch, companion) {
    try {
        console.log(fullName, phone, otherChurch, companion);
        return true

    } catch (error) {
        console.log("Error RegisterNewVisitant: ", error);
        throw error
    }
}

export async function GetIntegrators() {
    try {
        let data = [
            {
                "id": "5f0b0e88ce2dc597a02eab54",
                "isActive": true,
                "profile": "https://picsum.photos/500",
                "name": "Marina George Yates",
                "mentor": "Miller Ortiz Hardy",
                "quantityFeedbacks": 1,
                "accompanyLifes": 8,
                "numberNet": 1
            },
            {
                "id": "5f0b0e885ffa490488a0f84a",
                "isActive": false,
                "profile": "https://picsum.photos/500",
                "name": "Francisca Moore Terry",
                "mentor": "Letha Wynn Black",
                "quantityFeedbacks": 15,
                "accompanyLifes": 3,
                "numberNet": 3
            },
            {
                "id": "5f0b0e882945bc8a9987708c",
                "isActive": true,
                "profile": "https://picsum.photos/500",
                "name": "Barber Soto Guy",
                "mentor": "Fitzgerald Rodgers Marquez",
                "quantityFeedbacks": 18,
                "accompanyLifes": 1,
                "numberNet": 1
            },
            {
                "id": "5f0b0e88a23e8200a3164b55",
                "isActive": false,
                "profile": "https://picsum.photos/500",
                "name": "Ina Cameron Duran",
                "mentor": "Kitty Hampton Carver",
                "quantityFeedbacks": 20,
                "accompanyLifes": 5,
                "numberNet": 2
            },
            {
                "id": "5f0b0e8822ed8505f2189099",
                "isActive": false,
                "profile": "https://picsum.photos/500",
                "name": "Clemons Fletcher Mayer",
                "mentor": "Connie Flynn Clemons",
                "quantityFeedbacks": 2,
                "accompanyLifes": 5,
                "numberNet": 4
            },
            {
                "id": "5f0b0e883299c189d3b862b4",
                "isActive": true,
                "profile": "https://picsum.photos/500",
                "name": "Orr Sanford Sloan",
                "mentor": "Gwendolyn Dudley Hayden",
                "quantityFeedbacks": 16,
                "accompanyLifes": 2,
                "numberNet": 3
            }
        ]

        return data

    } catch (error) {
        console.log("Error GetIntegrators: ", error);
        throw error
    }
}

export default { RegisterNewVisitant, GetIntegrators }
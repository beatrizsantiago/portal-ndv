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

export async function AddIntegrator(email) {
    try {
        console.log(email);
        return true

    } catch (error) {
        console.log("Error AddIntegrator: ", error);
        throw error
    }
}

export async function GetLifes() {
    try {
        let data = [
            {
                "id": "5f0c9c2dbac81ab64a727b82",
                "name": "Odom Hendrix Peterson",
                "legend": 0,
                "phone": "+55 (850) 530-2375"
            },
            {
                "id": "5f0c9c2d266907d2abdffc5f",
                "name": "Tami Franklin Glass",
                "legend": 1,
                "phone": "+55 (844) 425-2245"
            },
            {
                "id": "5f0c9c2d0e1674be757c8a27",
                "name": "Cummings Park Rivera",
                "legend": 1,
                "phone": "+55 (958) 476-2635"
            },
            {
                "id": "5f0c9c2d062174507f4604b4",
                "name": "Powers Valdez Christensen",
                "legend": 0,
                "phone": "+55 (849) 496-3821"
            },
            {
                "id": "5f0c9c2d321a76b0ce3040c7",
                "name": "Georgia Gibson Fowler",
                "legend": 3,
                "phone": "+55 (988) 551-3907"
            },
            {
                "id": "5f0c9c2dc4614bd76af7848c",
                "name": "Richmond Black Mcmillan",
                "legend": 0,
                "phone": "+55 (856) 493-3821"
            },
            {
                "id": "5f0c9c2d85241337f725e522",
                "name": "Bernice Cotton Hudson",
                "legend": 2,
                "phone": "+55 (854) 513-2705"
            },
            {
                "id": "5f0c9c2db40b1e338d747859",
                "name": "Robyn Fleming Simpson",
                "legend": 2,
                "phone": "+55 (957) 486-3336"
            },
            {
                "id": "5f0c9c2d8886f1b4c7b0f73b",
                "name": "Tamera Callahan Osborn",
                "legend": 0,
                "phone": "+55 (846) 422-3346"
            },
            {
                "id": "5f0c9c2dd583fad9b0cd803d",
                "name": "Delacruz Poole Walls",
                "legend": 3,
                "phone": "+55 (830) 597-2709"
            }
        ]
        
        return data

    } catch (error) {
        console.log("Error GetLifes: ", error);
        throw error
    }
}

export async function SendNewFeedback(id, text) {
    try {
        console.log(id, text);
        return true

    } catch (error) {
        console.log("Error SendNewFeedback: ", error);
        throw error
    }
}

export async function LifeLost(id) {
    try {
        console.log(id);
        return true

    } catch (error) {
        console.log("Error LifeLost: ", error);
        throw error
    }
}

export async function GetDetailsLife(id) {
    try {
        console.log(id);
        return true

    } catch (error) {
        console.log("Error GetDetailsLife: ", error);
        throw error
    }
}

export default { RegisterNewVisitant, GetIntegrators, AddIntegrator, GetLifes, LifeLost, GetDetailsLife }
import axios from 'axios'

export async function RegisterNewVisitant(fullName, phone, frequentOtherChurch, companion) {
    try {
        console.log(fullName, phone, frequentOtherChurch, companion);
        await axios.post('lifes/create-visitant', { fullName, phone, frequentOtherChurch, companion })
        return true

    } catch (error) {
        console.log("Error RegisterNewVisitant: ", error);
        throw error
    }
}

export async function GetVisitants() {
    try {
        let visitants = await axios.get('lifes/list-visitants')
        return visitants.data

    } catch (error) {
        console.log("Error GetVisitants: ", error.response);
        throw error.response
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
                "id": "5f0da90f3194d0d7846cb55b",
                "isActive": false,
                "profile": "https://picsum.photos/500",
                "name": "Hardin Watson Leach",
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
        let lifes = await axios.get('lifes')
        return lifes.data

    } catch (error) {
        console.log("Error GetLifes: ", error.response);
        throw error.response
    }
}

export async function RegisterNewLife(fullName, phone, typeConversion, email, birthday, baptismOtherChurch, baptismToday, baptismMinister) {
    try {
        console.log(fullName, phone, typeConversion, email, birthday, baptismOtherChurch, baptismToday, baptismMinister);
        await axios.post('lifes', { fullName, phone, typeConversion, email, birthday, baptismOtherChurch, baptismToday, baptismMinister })
        return true

    } catch (error) {
        console.log("Error RegisterNewLife: ", error.response);
        throw error.response
    }
}

export async function SendNewFeedback(lifeId, content) {
    try {
        await axios.post('lifes/new-feedback', { lifeId, content })
        return true

    } catch (error) {
        console.log("Error SendNewFeedback: ", error.response);
        throw error.response
    }
}

export async function LifeLost(lifeId) {
    try {
        await axios.post(`lifes/life-lost/${lifeId}`)
        return true

    } catch (error) {
        console.log("Error LifeLost: ", error.response);
        throw error.response
    }
}

export async function GetDetailsLife(lifeId) {
    try {
        let life = await axios.get(`lifes/${lifeId}`)
        return life.data

    } catch (error) {
        console.log("Error GetDetailsLife: ", error.response);
        throw error.response
    }
}

export async function NewStepLife(lifeId, step, date) {
    try {
        await axios.put('lifes/add-life-step', { lifeId, step, date })
        return true

    } catch (error) {
        console.log("Error NewStepLife: ", error.response);
        throw error.response
    }
}

export async function AlterLife(lifeId, fullName, email, phone, birthday, integratorId) {
    try {
        await axios.put('lifes/add-life-step', { id: lifeId, fullName, email, phone, birthday, integratorId })
        return true

    } catch (error) {
        console.log("Error AlterLife: ", error.response);
        throw error.response
    }
}

export default { RegisterNewVisitant, GetVisitants, GetIntegrators, AddIntegrator, GetLifes, RegisterNewLife, SendNewFeedback, LifeLost, GetDetailsLife, NewStepLife, AlterLife }
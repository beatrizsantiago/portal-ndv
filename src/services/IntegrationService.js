export async function RegisterNewVisitant(fullName, phone, otherChurch, companion) {
    try {
        console.log(fullName, phone, otherChurch, companion);
        return true

    } catch (error) {
        console.log("Error RegisterNewVisitant: ", error);
        throw error
    }
}

export default { RegisterNewVisitant }



const applicationState = {
    reservations: [],
    clowns: [],
    filledReservations: []
}

const mainContainer = document.querySelector("#container")





const API = "http://localhost:8088"


export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (reservationRequests) => {
                // Store the external state in application state
                applicationState.reservations = reservationRequests
            }
        )
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (clownRequests) => {
                // Store the external state in application state
                applicationState.clowns = clownRequests
            }
        )
}

export const fetchFilledReservations = () => {
    return fetch(`${API}/filledReservations`)
        .then(response => response.json())
        .then(
            (filledRequests) => {
                // Store the external state in application state
                applicationState.filledReservations = filledRequests
            }
        )
}






export const getReservations = () => {
    return applicationState.reservations
    // .map(reservation => ({ ...reservation }))
}

export const getClowns = () => {
    return applicationState.clowns
}

export const getFilledReservations = () => {
    return applicationState.filledReservations
    // .map(filledReservation => ({ ...filledReservation }))
}





export const sendReservation = (userReservationRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservationRequest)
    }


    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


export const sendFilledReservation = (clownSelection) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(clownSelection)
    }


    return fetch(`${API}/filledReservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}





export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

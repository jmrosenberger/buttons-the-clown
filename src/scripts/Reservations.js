import { getReservations, deleteReservation, getClowns, getFilledReservations, deleteFilledReservation, sendFilledReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")



mainContainer.addEventListener(
    "change",
    (event) => {
        console.log(event.target.value)
        if (event.target.id === "clownsClown") {
            const [, clownSelection] = event.target.value.split("--")
            const dataToSendToAPI = {
             
                clownId: parseInt(clownSelection),
                timestamp: new Date()

            }
            sendFilledReservation(dataToSendToAPI)
        }
    }
)



mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [, reservationId] = click.target.id.split("--")
        let filledReservationId = reservationId
        deleteReservation(parseInt(reservationId))
        deleteFilledReservation(parseInt(filledReservationId))
    }
})



// In the following code, you will need to define the function that will be passed to the map() method.
// The function you write will convert each service request object into HTML representations. 
// Since it is wrapped with a <ul> element, make each one an <li> element showing only the description of the request to start.





const convertReservationToListElement = (reservation) => {
    const clowns = getClowns()
    return ` 
        <li class="reservation__list">	
        <select class="clowns" id="clownsClown">
    <option value="">Choose</option>
    ${clowns.map(
        clown => {
            return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
        }
    ).join("")
        }
        </select>
        &#129313; | Date Requested:
            ${reservation.neededBy} || 
            Length: 
            ${reservation.lengthOfTime} hours ||
            Address:
            ${reservation.location} ||
            Name Of Parent:
            ${reservation.parentName}
            <button class="reservation__delete"
                    id="reservation--${reservation.id}">
                Deny
            </button>
        </li>
    `
}



// For example, if you write a function named convertRequestToListElement, 
// then you would update the code below to requests.map(convertRequestToListElement).



export const Reservations = () => {
    const reservations = getReservations()
    const filledReservations = getFilledReservations()

    let html = `
        <ul class="reservation__container">
            ${reservations.map(convertReservationToListElement).join("")
        }
        </ul>
    `
    return html
}









import { getReservations, deleteReservation } from "./dataAccess.js"



const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})




// In the following code, you will need to define the function that will be passed to the map() method.



// The function you write will convert each service request object into HTML representations. 
// Since it is wrapped with a <ul> element, make each one an <li> element showing only the description of the request to start.


const convertReservationToListElement = (reservation) => {
    return ` 
        <li class="request__list">&#128736; 	
        &#128119;
            ${reservation.description}
            <button class="reservation__delete"
                    id="reservation--${reservation.id}">
                Delete
            </button>
        </li>
    `
}


// For example, if you write a function named convertRequestToListElement, 
// then you would update the code below to requests.map(convertRequestToListElement).







export const Reservations = () => {
    const reservations = getReservations()

    let html = `
        <ul class="reservation__container">
            ${
                reservations.map(convertReservationToListElement).join("")
            }
        </ul>
    `

    return html
}









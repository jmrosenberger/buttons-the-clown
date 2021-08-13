import { FilledReservations } from "./FilledReservations.js"
import { Reservations } from "./Reservations.js"





export const ButtonsTheClown = () => {
    return `
        <h1>Buttons The Clown</h1>
        <section class="serviceForm">
            ${FilledReservations()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Reservations()}
        </section>
    `
}


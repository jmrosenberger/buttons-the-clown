import { ReservationForm } from "./ReservationForm.js"
import { Reservations } from "./Reservations.js"





export const ButtonsTheClown = () => {
    return `
        <h1>Buttons The Clown</h1>
        <section class="serviceForm">
            ${ReservationForm()}
        </section>

        <section class="serviceRequests">
            <h2>Performance Schedule</h2>
            ${Reservations()}
        </section>
    `
}


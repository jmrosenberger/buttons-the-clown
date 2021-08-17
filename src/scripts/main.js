import { fetchClowns, fetchFilledReservations, fetchReservations } from "./dataAccess.js"
import { ButtonsTheClown } from "./ButtonsTheClown.js"



const mainContainer = document.querySelector("#container")


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)



const render = () => {
    fetchReservations()
    .then(fetchClowns)
    .then(fetchFilledReservations)
    .then(
        () => {
            mainContainer.innerHTML = ButtonsTheClown()

        }
    )
}

render()

